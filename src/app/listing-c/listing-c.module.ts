import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingCPageRoutingModule } from './listing-c-routing.module';

import { ListingCPage } from './listing-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingCPageRoutingModule
  ],
  declarations: [ListingCPage]
})
export class ListingCPageModule {}
