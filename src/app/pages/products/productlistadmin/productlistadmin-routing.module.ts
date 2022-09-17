import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistadminComponent } from './productlistadmin.component';

const routes: Routes = [{ path: '', component: ProductlistadminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistadminRoutingModule { }
