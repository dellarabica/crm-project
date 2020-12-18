import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingCPage } from './listing-c.page';

const routes: Routes = [
  {
    path: '',
    component: ListingCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingCPageRoutingModule {}
