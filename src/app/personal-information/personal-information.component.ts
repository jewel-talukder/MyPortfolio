import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Jewel Talukder'],
    ['DOB', '10/10/2002'],
    ['Work Exp', '3.5 Years'],
    ['Education', 'HSC'],
    ['Interests', 'Programming'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Developper with 3.5 years of experience in software industry.',
    'Worked as a Programmer of HR Payrole Management in  KS Apparels Ltd for various technologies (ASP.NET Core MVC, Javascript , JQuery , SQL Server , Devexpress Report).',
    'Worked as Jr. Software Engineer of Property Management Software (PMS),CRM,Smart Printing Solution in  Flex Infotech Limited for various technologies (ASP.NET Core Web Api, Blazor , Angular , XPO , SQL Server ,Devexpress Report).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Jr. Software Engineer',
  ];

  constructor() {
 
  }

  ngOnInit(): void {}
}
