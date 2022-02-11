import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCataloguePage } from './add-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: AddCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCataloguePageRoutingModule {}
