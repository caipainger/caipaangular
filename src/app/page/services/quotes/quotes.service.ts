import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CollectionReference, Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Messages } from 'src/app/shared/models/messages';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  // tslint:disable-next-line: new-parens
  selectQuotes: Messages ;
  lisMessaje!: Observable<Messages[]>;
  firestoreref!: CollectionReference<Messages>;
  quoteCollect!: AngularFirestoreCollection<Messages>;
  Quoteslist!: any;
  prodService: ProductsService;

  constructor(private frs: Firestore, private firestore: AngularFirestore) {

   }
   // tslint:disable-next-line: typedef
   getCotizar() {
      const stref = this.firestoreref;
      this.Quoteslist = collection(this.frs,'products');
          
      return this.lisMessaje =  collectionData(this.Quoteslist, {idField: 'id'}) as Observable<Messages[]>;
    }

  insertCotizador(cotiza: Messages): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const Id = cotiza.Id || this.firestore.createId();
        const data = {Id, ...cotiza};
        const result = await this.quoteCollect.doc(Id).set(data);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  //  try {
  //   this.firestoreref.push ({
  //     nameUser: cotiza.nameUser,
  //     nameProduct: cotiza.nameProduct,
  //     idProduct: cotiza.productId,
  //     product: cotiza.product,
  //     quantity: cotiza.quantity,
  //     message: cotiza.message,
  //     state: cotiza.state
  //   });
  //  } catch (error) {
  //    console.log(error);
  //  }
  }
  updateCotizar( cotiza: Messages): void {
    this.Quoteslist.update (cotiza.Id, {
      nameUser: cotiza.nameUser,
      nameProduct: cotiza.nameProduct,
      idProduct: cotiza.productId,
      date: cotiza.date,
      quantity: cotiza.quantity,
      message: cotiza.message,
      state: cotiza.state
    });
  }

  addProduct(){
    this.prodService.getProductList();
  }

  removeCotizar( Id: string): void {
    this.Quoteslist.remove(Id);
  }
  
}
