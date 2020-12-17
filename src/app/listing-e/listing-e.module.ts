import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingEPageRoutingModule } from './listing-e-routing.module';

import { ListingEPage } from './listing-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingEPageRoutingModule
  ],
  declarations: [ListingEPage]
})
export class ListingEPageModule {}
