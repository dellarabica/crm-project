import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModAddventePageRoutingModule } from './mod-addvente-routing.module';

import { ModAddventePage } from './mod-addvente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModAddventePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModAddventePage]
})
export class ModAddventePageModule {}
