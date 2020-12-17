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
  },  {
    path: 'mod-addclient',
    loadChildren: () => import('./mod-addclient/mod-addclient.module').then( m => m.ModAddclientPageModule)
  },
  {
    path: 'mod-addvente',
    loadChildren: () => import('./mod-addvente/mod-addvente.module').then( m => m.ModAddventePageModule)
  },
  {
    path: 'mod-addentreprise',
    loadChildren: () => import('./mod-addentreprise/mod-addentreprise.module').then( m => m.ModAddentreprisePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
