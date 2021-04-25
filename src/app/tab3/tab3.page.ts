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
  user: object;
  userLogged: boolean;

  ionViewWillEnter() {
    this.userLogged= this.authService.isLoggedIn;
    this.user = this.authService.userReturn;
    console.log(this.user);
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
