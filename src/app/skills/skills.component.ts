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
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Expert',
      rating: 75,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'C#',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name:'EF Core,XPO',
      level:'Expert',
      rating:85
    },{
      name:'SQL Server',
      level:'Intermidiate',
      rating:70
    },{
      name:'GitHub',
      level:'Expert',
      rating:80
    },{
      name:'Jira',
      level:'Intermidiate',
      rating:65
    },
    {
      name:'Blazor',
      level:'Beginner',
      rating:50
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
