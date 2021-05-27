import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ProductcreateComponent } from 'src/app/pages/products/productcreate/productcreate.component';
import { Products } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  selectproduct: Products = new Products();
  productscom!: ProductcreateComponent ;
  productlist!: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase) {

   }
   // tslint:disable-next-line: typedef
   getProduct(){
   return this.productlist = this.firebase.list('Products');
  }

  convertImages(image: any){
    var file = image;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.byte.match(pattern)) {
      alert('invalid format');
      return;
    }
  }


  // tslint:disable-next-line: typedef
  insertProductos( Product: Products){
    let id = Math.random().toString(36).substring(2);
    //let imagen = this.productscom.urlImage;
    
    this.productlist.push ({
      id: Product.id = id,
      name: Product.name,
      tipe: Product.tipo,
      price: Product.price,
      quantity: Product.quantity,
      image: Product.image ,
      description: Product.description,
      units: Product.units
    });
  }

  // tslint:disable-next-line: typedef
  updateProductos( Product: Products){
    //let imagen = this.productscom.urlImage;
    this.productlist.update (Product.$key, {
      id: Product.id,
      name: Product.name,
      tipe: Product.tipo,
      price: Product.price,
      quantity: Product.quantity,
      image: Product.image ,
      description: Product.description,
      units: Product.units
    });
  }

  // tslint:disable-next-line: typedef
  removeProductos( $key: string){
    this.productlist.remove($key);
  }
}
