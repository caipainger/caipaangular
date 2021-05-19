import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Messages } from 'src/app/shared/models/messages';
import { Products } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  // tslint:disable-next-line: new-parens
  selectQuotes: Messages = new Messages();
  selectProduct: Products = new Products();

  Quoteslist!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {

   }
   // tslint:disable-next-line: typedef
   getCotizar() {
      return this.Quoteslist = this.firebase.list('Messages');
    }

  insertCotizador(cotiza: Messages): void {
    this.Quoteslist.push ({
      name: cotiza.name,
      product: cotiza.product,
      quantity: cotiza.quantity,
      message: cotiza.message
    });
  }
  updateCotizar( cotiza: Messages): void {
    this.Quoteslist.update (cotiza.$key, {
      name: cotiza.name,
    product: cotiza.product,
    quantity: cotiza.quantity,
    message: cotiza.message
    });
  }

  removeCotizar( $key: string): void {
    this.Quoteslist.remove($key);
  }
  
}
