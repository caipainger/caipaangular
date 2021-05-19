import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotescreateRoutingModule } from './quotescreate-routing.module';
import { QuotescreateComponent } from './quotescreate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuotescreateComponent
  ],
  imports: [
    CommonModule,
    QuotescreateRoutingModule,
    FormsModule
  ]
})
export class QuotescreateModule { }
