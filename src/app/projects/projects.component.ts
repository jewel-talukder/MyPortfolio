import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Property Management Software',
      technologies: 'Asp.Net Core Web API, Angular, XPO, SQL Server,Devexpress Reporting',
      description: [
        'Worked as a Project lead to develop apps that are powered by Flex.',
        'Suggesting improvements to team and project workflow',
        'Implement 3rd party tools to improve the performance of the project',
        'Learned multiple technologies to build the product.'
      ],
    },
    {
      title: 'Smart Printing Solution',
      technologies: 'Asp.Net MVC,EF Core,Javascript,SQL Server,Devexpress Reporting',
      description: [
        'Worked as part of project to develop apps',
        'Publishing the project to the IIS Server ',
        'Solve the problem of the project',
      ],
    },
    {
      title: 'Denim ERP',
      technologies: 'Asp.Net MVC,EF Core,Javascript,SQL Server,Devexpress Reporting',
      description: [
        'Worked on Store Module of the project',
        
      ],
    },
    {
      title:'HR Payroll Management System',
      technologies:'Asp.Net MVC,EF Core,Javascript,JQ,SQL Server,Devexpress Reporting',
      description:[
        'Worked on 1.Recruitment Salary increase Bbonus payments Benefit deductions Vacation leave Module of the project',
        'Worked on 2. Employee Management Module of the project',
        'Worked on 3. Attendance Management Module of the project',
        'Worked on 4. Payroll Management Module of the project',
        'Worked on 5. Leave Management Module of the project',
        'Worked on 6. Performance Management Module of the project',
        'Worked on 7. Training Management Module of the project',   
        'Worked on 8. Employee Self Service Module of the project',
        'Worked on 9. Employee Onboarding Module of the project',
        'Worked on 10. Employee Separation Module of the project',
        'Worked on 11. Employee Exit Management Module of the project',
      ]
    },{
      title:'KS ERP',
      technologies:'Asp.Net MVC,EF Core,Javascript,JQ,SQL Server,Devexpress Reporting',
      description:[
        'Worked as SubContract Module of the project',
      ]
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
