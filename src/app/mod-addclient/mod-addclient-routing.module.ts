import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModAddclientPage } from './mod-addclient.page';

const routes: Routes = [
  {
    path: '',
    component: ModAddclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModAddclientPageRoutingModule {}
