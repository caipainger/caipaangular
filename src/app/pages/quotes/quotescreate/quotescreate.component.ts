import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuotesService } from 'src/app/page/services/quotes/quotes.service';
import { Messages } from 'src/app/shared/models/messages';

@Component({
  selector: 'app-quotescreate',
  templateUrl: './quotescreate.component.html',
  styleUrls: ['./quotescreate.component.scss']
})
export class QuotescreateComponent implements OnInit {

  quotes!: Messages;
  productsForm!: FormGroup;
  constructor(private router: Router,
    public quotesService: QuotesService) { }

  ngOnInit(): void {
  }
  onUpload(e: any){
    
  }
  onSubmit(quotesForm: NgForm){
    if (quotesForm.value.$key == null) {
      this.quotesService.updateCotizar(quotesForm.value);
    }else {
      this.quotesService.insertCotizador(quotesForm.value);
    }

    // tslint:disable-next-line: no-non-null-assertion
    this.resetForm(quotesForm);
    //console.log( this.urlImage);
  }
  onGoToBack(){
    
  }
  resetForm(quotesForm?: NgForm) {
    if (quotesForm != null) {
      quotesForm.reset();
      this.quotesService.selectQuotes = new Messages();
      this.quotesService.selectQuotes.$key
      this.quotesService.selectQuotes.name
      this.quotesService.selectQuotes.product
      this.quotesService.selectQuotes.quantity
      this.quotesService.selectQuotes.message
    }
  }

}
