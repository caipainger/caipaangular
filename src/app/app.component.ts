import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './page/services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'caipaangular';
  constructor(private router: Router, public productService: ProductsService) {
  }
  ngOnInit(): void {

    // if ( !this.productService.getProduct() )  {
    //   this.router.navigate(['productcreate']);
    // }else{
    //   this.router.navigate(['productlist']);
    // }
    // tslint:disable-next-line:no-trailing-whitespace
    

  }

}
