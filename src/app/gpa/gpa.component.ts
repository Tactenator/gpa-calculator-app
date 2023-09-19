/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Assignment 6.4 - Input Properties
 * Description: GPA component
**/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent {

  @Input() gpaTotal: number;
}
