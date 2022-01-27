import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { NavigationExtras, Router } from '@angular/router';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
navigationextras: NavigationExtras = {
  state: {
    value: null
  }
};

valueitem$ = this.productService.selectproduct ;
productlist!: AngularFireList<any>;

  constructor(private router: Router, private firebase: AngularFireDatabase, public productService: ProductsService) { }



  ngOnInit(): void {
    this.productService.getProductList();
      
      
  }

  onGoToDetails(item: Products): void{
    this.navigationextras.state = item;
    this.router.navigate(['productdetails'], this.navigationextras);
  }

}
