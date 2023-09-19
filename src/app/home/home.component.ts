/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Assignment 6.4 - Input Properties
 * Description: Home component
**/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  gpaTotal: number = 0;
  transcriptEntry: ITranscript
  selectableGrades: Array<string> = [
    'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'
  ]
  transcriptEntries: Array<ITranscript> = []
  transcriptForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.transcriptEntry = {} as ITranscript
  }

  ngOnInit(): void {
    this.transcriptForm = this.formBuilder.group({ course: ['', Validators.required], grade: ['', Validators.required] })
  }

  onSubmit(e) {
    this.transcriptEntries.push({ course: this.form['course'].value, grade: this.form['grade'].value })
  }

  get form() {return this.transcriptForm.controls; }

  calculateResults() {
    let gpa:number = 0;
    this.transcriptEntries.forEach(entry => {
      switch(entry.grade) {
        case ('A'):
          gpa+= 4.0;
          break;
        case ('A-'):
          gpa+= 3.7;
          break;
        case ('B+'):
          gpa+=3.3;
          break;
        case ('B'):
          gpa+=3.0
          break;
        case ('B-'):
          gpa+=2.7;
          break;
        case ('C+'):
          gpa+=2.3;
          break;
        case ('C'):
          gpa+=2.0;
          break;
        case ('C-'):
          gpa+=1.7;
          break;
        case ('D+'):
          gpa+=1.3;
          break;
        case('D'):
          gpa+=1.0
          break;
        case('D-'):
          gpa+=0.7;
          break;
        case('F'):
          gpa+=0
          break;
      }
    })
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = []
    this.gpaTotal = 0
  }
}
