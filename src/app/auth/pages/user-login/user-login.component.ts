import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public login: string = '';
  public password: string = '';
  public show: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.loggedIn) {
      this.router.navigate(['main']);
    }
   }

  public auth(): void {
      this.loginService.auth(this.login, this.password);
      this.router.navigate(['main']);
  }

  public ngOnInit(): void {
  }
}
