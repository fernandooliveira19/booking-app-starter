import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bkn-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

loginForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email : this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    })
  }

}
