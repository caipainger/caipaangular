import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteslistComponent } from './quoteslist.component';

const routes: Routes = [{ path: '', component: QuoteslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteslistRoutingModule { }
