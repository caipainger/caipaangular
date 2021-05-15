import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  valueitem: any = null;
  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router, private productService: ProductsService) {
    const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
  }

  ngOnInit() {

  }
  onGoToEdit(valueitem: Products){
    //this.productService.updateProductos(valueitem) ;
    this.router.navigate(['productcreate'], this.navigationextras);
    alert('esto es lo que hay  ' + valueitem.$key + ' ');
  }
  onGoToCreate(){

    this.router.navigate(['productcreate']);
  }
  onGoToDelete(item: Products){
    this.productService.removeProductos(item.$key);
    alert('has been deleted succesfull' + this.navigationextras);
  }
  onGoToBack(){
    this.router.navigate(['productlist']);
  }



}
