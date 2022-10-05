import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/login.service';
import { User } from 'app/login/user.model';

@Component({
  selector: 'bkn-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  user():User{
    return this.loginService.user
  }

  isLoggedIn():boolean{
    return this.loginService.isLoggedIn()
  }

  login(){
    this.loginService.handleLogin()
  }

  logout(){
    this.loginService.logout()
  }

}
