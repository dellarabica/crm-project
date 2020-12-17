import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModAddventePage } from './mod-addvente.page';

const routes: Routes = [
  {
    path: '',
    component: ModAddventePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModAddventePageRoutingModule {}
