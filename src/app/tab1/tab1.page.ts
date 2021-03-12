import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController){}

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

}
