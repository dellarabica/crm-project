import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing-v',
    pathMatch: 'full'
  },
  {
    path: 'listing-v',
    loadChildren: () => import('./listing-v/listing-v.module').then( m => m.ListingVPageModule)
  },
  {
    path: 'listing-e',
    loadChildren: () => import('./listing-e/listing-e.module').then( m => m.ListingEPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
