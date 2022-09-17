import { Injectable } from '@angular/core';
import { Messages } from 'src/app/shared/models/messages';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { QuotesService } from '../quotes/quotes.service';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class MessajesService extends QuotesService{

  messaje!: Messages;
  lisMessaje!: Observable<Messages[]>;
  messageCollec!: AngularFirestoreCollection;

  constructor(frs: Firestore, firestore: AngularFirestore) {
    super(frs, firestore);
  }

  getMessajes(): void{
    const count = this.getCotizar();
    count.forEach(item =>{item.length})
    alert(count);
  }

  setMessajes(messaje: Messages){

  }

  updateMessajes(message: Messages){

  }


}
