import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MdbCardImageComponent } from 'angular-bootstrap-md';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { Products } from 'src/app/shared/models/products';
import { ProductcreateComponent } from '../productcreate/productcreate.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  valueitem: any ;
  imageMdb!: MdbCardImageComponent;
  imageNumber: any[] = [];
  json: any;
  productscom!: ProductcreateComponent ;
  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router, private productService: ProductsService) {
    const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
    // const i = 0;
    const archivos = Object.values( this.valueitem.imageProduct).length;
    // alert(archivos);
    for (let i = 1; i < archivos; i ++ ) {
      this.imageNumber [i - 1] = i;
      }
      // alert(this.imageNumber)
  }

  ngOnInit(): void {

  }
  onGoToEdit(item: Products): void{
    this.navigationextras.state = item;
    this.router.navigate(['productcreate'], this.navigationextras);
    alert('esto es lo que hay  ' + item.Id + ' ');
  }
  onGoToCreate(): void{

    this.router.navigate(['productcreate']);
  }
  onGoToDelete(item: Products): void{
    // tslint:disable-next-line:no-non-null-assertion
    this.productService.deleteProductList(item.Id!);
    alert('has been deleted succesfull' + this.navigationextras);
    this.router.navigate(['productlist']);
  }
  onGoToBack(): void {
    this.router.navigate(['productlist']);
  }





}
