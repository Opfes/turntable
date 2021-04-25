import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore } from "@angular/fire/firestore"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listings:object[] = [];
  constructor(public alertController: AlertController, public authService: AuthenticationService ){
    
  }
  //this.listingsSet =  fireStore.collection<any>('listings');

  ngOnInit() {
    this.listings = this.authService.pullCollectionsFromDB();
    console.log(this.listings);
    
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



