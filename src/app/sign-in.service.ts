import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>

  constructor() { 
    this.studentIds = [1008, 1009, 1010, 1011, 1012]
  }

  validate(studentId: number) {
    return this.studentIds.includes(studentId)
  }
}
