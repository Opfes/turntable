import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddlistingPageRoutingModule } from './addlisting-routing.module';

import { AddlistingPage } from './addlisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddlistingPageRoutingModule
  ],
  declarations: [AddlistingPage]
})
export class AddlistingPageModule {}
