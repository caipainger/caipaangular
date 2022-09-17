import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistadminRoutingModule } from './productlistadmin-routing.module';
import { ProductlistadminComponent } from './productlistadmin.component';


@NgModule({
  declarations: [
    ProductlistadminComponent
  ],
  imports: [
    CommonModule,
    ProductlistadminRoutingModule
  ]
})
export class ProductlistadminModule { }
