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
      role: 'Software Engineer(Backend)',
      company: 'Raintor Ltd',
      duration: 'May 2025 - Now',
      description: [
        'Working on Govt Projects i.e.:Truthbox Software And Restaurant Management Software.',
        'My role involves building and maintaining robust, scalable backend systems with a strong focus on real-time functionality using SignalR.'

      ],
    },
    {
      role: 'Software Engineer',
      company: 'Dream71 Bangladesh Ltd',
      duration: 'Feb 2024 - May 2025',
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
  formatDescription(desc: string): string {
  var data= desc.length > 80
    ? desc.slice(0, 95) + '<br>' + desc.slice(95)
    : desc;
    debugger;
    return data;
}
}
