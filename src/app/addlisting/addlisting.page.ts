import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.page.html',
  styleUrls: ['./addlisting.page.scss'],
})
export class AddlistingPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  submitNewListing(name, description, price) {
    this.authService.addListing(name.value, description.value, price.value)
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
