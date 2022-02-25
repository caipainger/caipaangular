import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productlist',
    pathMatch: 'full',
  },
  {
    path: 'productlist',
    loadChildren: () =>
      import('./pages/products/productlist/productlist.module').then(
        (m) => m.ProductlistModule
      ),
  },
  {
    path: 'productdetails',
    loadChildren: () =>
      import('./pages/products/productdetails/productdetails.module').then(
        (m) => m.ProductdetailsModule
      ),
  },
  {
    path: 'productcreate',
    loadChildren: () =>
      import('./pages/products/productcreate/productcreate.module').then(
        (m) => m.ProductcreateModule
      ),
  },
  {
    path: 'qoutescreate',
    loadChildren: () =>
      import('./pages/quotes/quotescreate/quotescreate.module').then(
        (m) => m.QuotescreateModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/users/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/users/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'quoteslist',
    loadChildren: () =>
      import('./pages/quotes/quoteslist/quoteslist.module').then(
        (m) => m.QuoteslistModule
      ),
  },
  {
    path: '**',
    redirectTo: '/productlist',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
