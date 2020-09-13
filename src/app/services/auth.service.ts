import { CommonService } from './common.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedInUser: any = {}
  isSignedIn: boolean = false
  url: string;

  constructor(
    private http: HttpClient,

    private router: Router,
    private commonService: CommonService,
  ) {
    this.url = environment.baseApiUrl2
  }

  signUpUser(user) {
    this.http.post(this.url + "auth/register", user)
      .subscribe(res => {
        console.log(res)
        this.commonService.presentToast("Sign Up processing is succesful :)")
        this.router.navigate(['/login'], { replaceUrl: true })
      }, err => { console.log(err) })
  }

  signInUser(user) {
    console.log(user)
    this.http.post<any>(this.url + "auth/login", user)
      .subscribe(res => {
        this.saveAuthenticationData(res)
        this.router.navigate(['/home'], { queryParams: { page: 1 }, replaceUrl: true })
        this.commonService.presentToast(res.message)
        this.isSignedIn = true
        this.commonService.selectedIndexMenu = 0
        this.logTimer(parseInt(res.auth.expiresIn))
        this.createGuestSession()
      }, err => { console.log(err) })
  }

  saveAuthenticationData(authenticationData) {
    this.signedInUser = authenticationData.user
    localStorage.setItem('authentication', JSON.stringify(authenticationData))
  }

  getAuthenticationData() {
    let data = JSON.parse(localStorage.getItem('authentication'))
    return data
  }

  signOut() {
    localStorage.removeItem('authentication')
    this.signedInUser = {}
    this.isSignedIn = false
    this.router.navigate(['/home'], { replaceUrl: true })
    this.commonService.selectedIndexMenu = 0
    this.commonService.presentToast('You signed out succesfully')
  }

  initAuth() {
    const localData = this.getAuthenticationData()

    if (localData) {
      let now = new Date().getTime()
      const expireDate = new Date(localData.auth.expireDate).getTime()

      if (now >= expireDate) {
        this.signOut()
      } else {
        this.isSignedIn = true
        this.signedInUser = localData.user
        const leftTime = expireDate - now
        this.logTimer(leftTime)
      }
    }
  }

  public logTimer(expiresIn) {
    setTimeout(() => {
      this.signOut()
    }, expiresIn)
  }


  createGuestSession() { 
    this.http.get<any>(environment.baseApiUrl + "authentication/guest_session/new" + environment.api_key)
      .subscribe(res => { 
        console.log(res)
        localStorage.setItem('session_id' , res.guest_session_id)
      },err=> {console.log(err)})
  }



}
