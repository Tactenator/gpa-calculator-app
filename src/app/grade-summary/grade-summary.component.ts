/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Assignment 6.4 - Input Properties
 * Description: Grade summary component
**/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})


export class GradeSummaryComponent {
  @Input() grade: string;
  @Input() course: string;
}
