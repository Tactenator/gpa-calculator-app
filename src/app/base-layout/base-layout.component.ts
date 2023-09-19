/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Assignment 6.4 - Input Properties
 * Description: Base layout component
**/

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {

  assignment: string = "";

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator'
  }

  signOut() {
    this.cookieService.deleteAll()
    this.router.navigate(['/session/sign-in'])
  }
}
