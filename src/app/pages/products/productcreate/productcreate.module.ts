import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagedirectiveDirective } from '../../../page/directives/imagedirective.directive';
import { ProductcreateRoutingModule } from './productcreate-routing.module';
import { ProductcreateComponent } from './productcreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    ProductcreateComponent,
    ImagedirectiveDirective
  ],
  imports: [
    CommonModule,
    ProductcreateRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class ProductcreateModule { }
