import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingVPage } from './listing-v.page';

const routes: Routes = [
  {
    path: '',
    component: ListingVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingVPageRoutingModule {}
