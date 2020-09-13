import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerFormData = {
    name: null,
    username: null,
    email: null,
    password: null,
    repeatPassword:null
  }

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() { }
  blankControl() {
    let status = true
    for (let key in this.registerFormData) {
      if (this.registerFormData[key] === null || this.registerFormData.repeatPassword === null) status = false
    }
    return { message: status ? null : "lütfen bütün alanları doldurunuz", status }
  }

  postRegisterData() {
    const pass1 = this.registerFormData.password
    const pass2 = this.registerFormData.repeatPassword

    if (this.blankControl().status) {
      this.authService.signUpUser(this.registerFormData)
    }
  }


}
