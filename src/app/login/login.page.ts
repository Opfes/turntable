import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  logIn(email, password){
    this.authService.SignIn(email.value, password.value)
    .then((res) => {
      this.router.navigate(['tabs'])
      .then(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/tabs';
      });
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  reset(email){
    this.authService.PasswordRecover(email.value);
  }


}
