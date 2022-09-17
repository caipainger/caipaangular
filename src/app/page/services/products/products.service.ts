import { Injectable } from '@angular/core';
import { AngularFireList , AngularFireDatabase } from '@angular/fire/compat/database';
import { collectionData, collection, Firestore } from '@angular/fire/firestore'
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductcreateComponent } from 'src/app/pages/products/productcreate/productcreate.component';
import { Products } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  selectproduct!: Observable<Products[]>;
  productscom!: ProductcreateComponent ;
  productlist!: AngularFireList<Products>;
  private productsCollect!: AngularFirestoreCollection<Products>;
  private productsCollection!: any;
  constructor( private firebase: AngularFireDatabase, 
    private firestore: AngularFirestore, 
    private frs: Firestore
    ) {
    this.getProductList();
   }

   getProductList(): void{
    this.productsCollection = collection(this.frs,'products');
      this.selectproduct = collectionData(this.productsCollection, {idField: 'id'}) as Observable<Products[]>;
          
    }

   insertProductList( products: Products, prodId: string): Promise<void>{
     console.log(products);
     return new Promise(async (resolve, reject) => {
       try {
         const Id = prodId || this.firestore.createId();
         const data = {Id, ...products};
         const result = await this.productsCollection.doc(Id).set(data);
         resolve(result);
       } catch (err) {
         reject(err);
       }
     });
     }
   // updateProductList($key: string): Promise<void>{   }
   deleteProductList(prodId: string): Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        // const Id = prodId || this.firestore.createId();
        // const data = {Id, ...products};
        const result = await this.productsCollect.doc(prodId).delete();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
     }
   getProduct(): any{
   return this.productlist = this.firebase.list('Products');
  }

  convertImages(image: any): any{
    const file = image;
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.byte.match(pattern)) {
      alert('invalid format');
      return;
    }else{

    }
  }
}
