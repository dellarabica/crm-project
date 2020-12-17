import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModAddentreprisePageRoutingModule } from './mod-addentreprise-routing.module';

import { ModAddentreprisePage } from './mod-addentreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModAddentreprisePageRoutingModule
  ],
  declarations: [ModAddentreprisePage]
})
export class ModAddentreprisePageModule {}
