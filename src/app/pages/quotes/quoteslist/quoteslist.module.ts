import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteslistRoutingModule } from './quoteslist-routing.module';
import { QuoteslistComponent } from './quoteslist.component';


@NgModule({
  declarations: [
    QuoteslistComponent
  ],
  imports: [
    CommonModule,
    QuoteslistRoutingModule
  ]
})
export class QuoteslistModule { }
