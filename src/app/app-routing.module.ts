import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-catalogue',
    loadChildren: () => import('./add-catalogue/add-catalogue.module').then(m => m.AddCataloguePageModule)
  },
  {
    path: 'add-commande',
    loadChildren: () => import('./add-commande/add-commande.module').then(m => m.AddCommandePageModule)
  },
  {
    path: 'clients',
    canActivate: [AuthGuard],
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'add-client',
    loadChildren: () => import('./add-client/add-client.module').then(m => m.AddClientPageModule)
  },
  {
    path: 'edit-client/:id',
    loadChildren: () => import('./edit-client/edit-client.module').then(m => m.EditClientPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
