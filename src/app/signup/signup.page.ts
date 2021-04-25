import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  constructor( public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() { }


  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      this.router.navigate(['tabs'])
      .then(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/tabs';
      });
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  
}
