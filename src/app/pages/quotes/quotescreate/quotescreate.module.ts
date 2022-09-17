import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotescreateRoutingModule } from './quotescreate-routing.module';
import { QuotescreateComponent } from './quotescreate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuotescreateComponent
  ],
  imports: [
    CommonModule,
    QuotescreateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuotescreateModule { }
