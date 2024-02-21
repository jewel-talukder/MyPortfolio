import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material'
    },
    {
      name: 'ASP.NET Core MVC, EF Core,ASP .NET Core Web API'
    },
    {
      name: 'HTML, CSS, JS',
    },
    {
      name: 'C#',
    },
    {
      name: 'C++'
    },
    {
      name:'eXpress Persistent Objects (XPO)'
    },{
      name:'SQL Server'
    },{
      name:'GitHub'
    },{
      name:'Jira'
    },
    {
      name:'Blazor'
    },
    {
      name:'PostgreSQL'
    },
    {
      name:'Devextreme UI With Angular'
    },
    {
      name:'jQuery'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
