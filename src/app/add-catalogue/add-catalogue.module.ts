import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCataloguePageRoutingModule } from './add-catalogue-routing.module';

import { AddCataloguePage } from './add-catalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCataloguePageRoutingModule
  ],
  declarations: [AddCataloguePage]
})
export class AddCataloguePageModule {}
