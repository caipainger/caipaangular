import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Products } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  selectproduct: Products = new Products();

  productlist!: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase) {

   }
   // tslint:disable-next-line: typedef
   getProduct(){
   return this.productlist = this.firebase.list('Products');
  }



  // tslint:disable-next-line: typedef
  insertProductos( Product: Products){
    let id = Math.random().toString(36).substring(2);
    
    this.productlist.push ({
      id: Product.id = id,
      name: Product.name,
      tipe: Product.tipo,
      price: Product.price,
      quantity: Product.quantity,
      image: Product.image,
      description: Product.description
    });
  }

  // tslint:disable-next-line: typedef
  updateProductos( Product: Products){
    this.productlist.update (Product.$key, {
      id: Product.id,
      name: Product.name,
      tipe: Product.tipo,
      price: Product.price,
      quantity: Product.quantity,
      image: Product.image,
      description: Product.description
    });
  }

  // tslint:disable-next-line: typedef
  removeProductos( $key: AutoKeyword){
    this.productlist.remove($key);
  }
}
