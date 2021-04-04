import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController, public storage: AngularFireStorage, private fireStore: AngularFirestore){
    
  }
  //this.listingsSet =  fireStore.collection<any>('listings');
  

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



