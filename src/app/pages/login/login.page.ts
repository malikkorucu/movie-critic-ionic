import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormData = {
    username: null,
    password:null
  }
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

  blankControl() { 
    let status = true
    if(!this.loginFormData.username || !this.loginFormData.password) status = false
    return {status , message:status? null : "lütfen bütün alanları doldurunuz !!"}
  }

  postFormData() { 
    if (this.blankControl().status) {
      this.authService.signInUser(this.loginFormData)
    } else { 
      alert(this.blankControl().message)
    }

  }

}
