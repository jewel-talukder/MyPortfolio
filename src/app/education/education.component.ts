import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Govt.Muksudpur College',
      course: 'BSS in Degree',
      duration: 'Currently',
      score: 'Ongoing',
    },
    {
      institute: 'M.A. Khaleque Degree College',
      course: 'HSC',
      duration: '2021',
      score: 'Pass',
    },
    {
      institute: 'Alhaz A. G. High School',
      course: 'SSC',
      duration: '2018',
      score: 'Pass',
    },
    {
      institute: 'Alhaz A. G. High School',
      course: 'JSC',
      duration: '2015',
      score: 'Pass',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
