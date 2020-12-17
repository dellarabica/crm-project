import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingVPageRoutingModule } from './listing-v-routing.module';

import { ListingVPage } from './listing-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingVPageRoutingModule
  ],
  declarations: [ListingVPage]
})
export class ListingVPageModule {}
