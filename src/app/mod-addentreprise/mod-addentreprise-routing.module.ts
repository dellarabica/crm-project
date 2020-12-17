import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModAddentreprisePage } from './mod-addentreprise.page';

const routes: Routes = [
  {
    path: '',
    component: ModAddentreprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModAddentreprisePageRoutingModule {}
