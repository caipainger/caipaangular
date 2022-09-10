import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'
import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailsComponent } from './productdetails.component';


@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ProductdetailsRoutingModule,
    MdbCarouselModule
  ]
})
export class ProductdetailsModule { }
