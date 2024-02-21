import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'Dream71 Bangladesh Ltd',
      duration: 'Feb 2024 - Now',
      description: [
        'Working on Govt Projects i.e.:High Way Road Management Software',
      ],
    },
    {
      role: 'Jr. Software Engineer',
      company: 'Flex Infotech Limited',
      duration: 'Oct 2022 - Jan 2024',
      description: [
        'Working on Various Software Projects i.e.:Denim ERP,Smart Printing Solution,PMS etc.',
        'Working to develop new technologies to make life easier.',
        'Worked on different technologies such as (Dotnet, Angular, Javascript, C++ etc.)'
      ],
    },
    {
      role: 'Programmer',
      company: 'KS Apparels Limited',
      duration: 'Jan 2022 - Oct 2022',
      description: [
        ' Improved system performance by making proactive adjustments and resolving bugs',
        'Worked with multiple teams to develop  web applications',
      ],
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
