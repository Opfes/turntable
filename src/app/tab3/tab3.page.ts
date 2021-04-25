import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController, public authService: AuthenticationService) {}
  email: string;
  userLogged: boolean;

  ionViewWillEnter() {
    this.userLogged= this.authService.isLoggedIn;
    this.email = this.authService.emailReturn;
  }

  logOut(){
    this.authService.SignOut();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Pardon my construction',
      message: 'This feature is unimplemented. It will generate a dialogue box that will allow the user to view offers.',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}

interface userObject {
  uid: string
  displayName: string
  photoURL: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  isAnonymous: boolean
  tenantID: string
  providerData: Array<string>
  redirectEventId: string
  stsTokenManager: object //this might need to be Object
}
