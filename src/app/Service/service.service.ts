
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public connection : signalR.HubConnection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5037/Hub")
  .configureLogging(signalR.LogLevel.Information)
  .build();

  public connectedUsers$ = new BehaviorSubject<string[]>([]);
  public messages: any[] = [];
  public users: string[] = [];
  friendData:any[]=[];
  friendRequestCount:number =0;
  private receivedAcceptFriendRequestSource = new Subject<any>();
  receivedAcceptFriendRequest$ = this.receivedAcceptFriendRequestSource.asObservable();

  constructor() {
    this.start();
    this.connection.on("ReceiveMessages", (message:any)=>{
      debugger;
      this.messages = [...this.messages, message ];
      const audio = new Audio('assets/audio/messageAudio.mp3');
      audio.load();
      audio.play();
     this.updateChatMessage(message)
    
    });
    this.connection.on("ConnectedUser",(data:any)=>{
      var existUser = this.friendData.find(x=>x.UserId == data.userId);
      existUser.IsCurrentUseingApps =true;
    });
    this.connection.on('ReceivedAcceptFriendRequest',(data:any)=>{
      this.receivedAcceptFriendRequestSource.next(data);
    });
    this.connection.on("DisConnectedUser",(data:any)=>{
      var existUser = this.friendData.find(x=>x.UserId == data.userId);
      existUser.IsCurrentUseingApps =false;
    });
    this.connection.on("CurrentTextStatus",(data:any)=>{
      var existUser = this.friendData.find(x=>x.UserId == data.userId);
      if(data.typingStatus){
        existUser.CurrentTexting =1;
      }else{
        existUser.CurrentTexting =0;
      }

    })
    this.connection.on("ReceiveFriendRequest",(data:any)=>{
      this.friendRequestCount =+ 1

    })
   }
   
  //start connection
  public async start(){
    try {
      await this.connection.start();
      console.log("Connection is established!")
    } catch (error) {
      console.log(error);
    }
  }
 
  //Join Room
  public async onConnectedUser(methodName:string,userId:number){
    return this.connection.invoke(methodName, userId);
  }
   
public async onFriendRequsest(senderUserId:any,ReceiverUserId:any){
  return this.connection.invoke("OnFriendRequest",senderUserId,ReceiverUserId)
}
public async onUpdateTextStatus(senderId:number,receiverId:number,typingStatus:boolean){
return this.connection.invoke("onUpdateTextStatus",senderId,receiverId,typingStatus);
}
  // Send Messages
  public async sendMessage(message: any){
    message.Created_At = new Date();
    this.updateChatMessage(message)
    return this.connection.invoke("onSendMessages", message)
  }
public async sendAcceptFriendRequestAccept(senderId:number,receiverId:number){
  return this.connection.invoke('SendAcceptFriendRequest',senderId,receiverId);
}
  //leave
  public async leaveChat(){
    return this.connection.stop();
  }
  onReceiveCall(callback: () => void) {
    this.connection.on('ReceiveCall', callback);
  }

  onCallAnswered(callback: () => void) {
    this.connection.on('CallAnswered', callback);
  }

  callUser(userId: number) {
    this.connection.invoke('CallUser', userId);
  }

  answerCall(userId: number) {
    this.connection.invoke('AnswerCall', userId);
  }

  updateChatMessage(message:any){
    var existingUser = this.friendData.find(x=>x.UserId == message.SenderUserId || x.UserId == message.ReceiverUserId);
    if(existingUser){
      existingUser.LastMessages = message.MessageBody;
      existingUser.LastMessageDate = message.Created_At;
      this.friendData = this.friendData.sort((a, b) => 
        new Date(b.LastMessageDate).getTime() - new Date(a.LastMessageDate).getTime()
      );
    }
  }

}
