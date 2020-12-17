import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingEPage } from './listing-e.page';

const routes: Routes = [
  {
    path: '',
    component: ListingEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingEPageRoutingModule {}
