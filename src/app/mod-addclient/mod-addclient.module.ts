import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModAddclientPageRoutingModule } from './mod-addclient-routing.module';

import { ModAddclientPage } from './mod-addclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModAddclientPageRoutingModule
  ],
  declarations: [ModAddclientPage]
})
export class ModAddclientPageModule {}
