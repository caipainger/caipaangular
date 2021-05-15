import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductcreateRoutingModule } from './productcreate-routing.module';
import { ProductcreateComponent } from './productcreate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductcreateComponent
  ],
  imports: [
    CommonModule,
    ProductcreateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductcreateModule { }
