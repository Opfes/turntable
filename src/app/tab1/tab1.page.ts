import { Component } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  listingIDs: Array<dataCatcher>;
  listings: Array<dataCatcher>;
  IDs: Array<dataCatcher>;

  constructor(public alertController: AlertController, public authService: AuthenticationService, public router: Router){}
  
  userLogged: boolean;
  user: object;
  
  ngOnInit(){
    this.userLogged= this.authService.isLoggedIn;
  }

  ionViewWillEnter() {
    this.userLogged= this.authService.isLoggedIn;
    this.listings = this.authService.pullCollectionDataFromDBForUser();
    this.listingIDs = this.authService.pullCollectionIDFromDBForUser();
    this.user = this.authService.userReturn;
    console.log(this.listings);
    console.log(this.listingIDs);
  }

  async offerAlert(){
    const alert = await this.alertController.create({
      header: 'Pardon my construction',
      message: 'This feature is unimplemented. It will generate a modal that will show a list of offers for the album.',
      buttons: ['OK']
    });

    
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToNewListing() {
    this.router.navigate(['addlisting']);
  }

  async newListingAlert(){
    const alert = await this.alertController.create({
      header: 'Pardon my construction',
      message: 'This feature is unimplemented. It will allow the user to create a new listing.',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    
  }

  deleteListing(i) {
    var listingID = this.listingIDs[i];
    console.log(listingID);
    this.authService.deleteListing(listingID);
  }

}

interface dataCatcher {
  [key: string]: any  
}