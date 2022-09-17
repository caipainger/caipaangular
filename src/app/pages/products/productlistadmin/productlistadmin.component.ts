import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { NavigationExtras, Router } from '@angular/router';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-productlistadmin',
  templateUrl: './productlistadmin.component.html',
  styleUrls: ['./productlistadmin.component.scss']
})
export class ProductlistadminComponent implements OnInit {

  valueitem$ = this.productService.selectproduct;
  productlist!: AngularFireList<any>;
  navigationextras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(
    private router: Router,
    private firebase: AngularFireDatabase,
    public productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getProductList();
  }

  onGoToDetails(item: Products): void {
    this.navigationextras.state = item;
    this.router.navigate(['productdetails'], this.navigationextras);
  }
  onGoEdit(item: Products){
    this.navigationextras.state = item;
    this.router.navigate(['productcreate'], this.navigationextras);
  }
}


