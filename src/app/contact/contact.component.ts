import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private clipboardService: ClipboardService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  redirctUrl(url:string){
    window.open(url,"_blank");
  }
  copyToClipboard() {
    this.clipboardService.copy('jeweltalukders53@gmail.com');
    this.toastr.success("Mail has been Copied !");
  }
}
