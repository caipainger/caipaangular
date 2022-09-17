import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from '@firebase/util';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { QuotesService } from 'src/app/page/services/quotes/quotes.service';
import { Messages } from 'src/app/shared/models/messages';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-quotescreate',
  templateUrl: './quotescreate.component.html',
  styleUrls: ['./quotescreate.component.scss']
})
export class QuotescreateComponent implements OnInit {

  quotes!: Messages;
  Products = this.ps.selectproduct;
  quotesForm!: FormGroup;
  navigationextras: NavigationExtras;
  valueitem: { [k: string]: any; } | undefined;
  public isNumber = /^([0-9]){1-20}$/;
  datecurrent: any;
  
  constructor(private router: Router,
              public quotesService: QuotesService, 
              private formbuild: FormBuilder,
              private ps: ProductsService) { 
                const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;  
    this.CreateQuoteForm();
              }
  public CreateQuoteForm(): void {
    const mess = this.quotes;
   
    this.quotesForm = this.formbuild.group({
      nameUser: ['', [Validators.required]],
      date: [this.datecurrent],
      nameProduct: ['', [Validators.required]],
      productId: ['', [Validators.required]],
      message: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.pattern(this.isNumber)]],
    });

    console.log(this.quotesForm.value)
  }

  ngOnInit(): void {
    this.ps.getProductList();
  }
  onUpload(e: any): any{

  }
  
  onSubmit(): any{
    // if (quotesForm.value.Id == null) {
    //   this.quotesService.insertCotizador(quotesForm.value);
    // }else {
    //   this.quotesService.updateCotizar(quotesForm.value);
    // }
   
    // tslint:disable-next-line: no-non-null-assertion
    this.resetForm();
    // console.log( this.urlImage);
  }
  onGoToBack(): any{
    //this.navigationextras.state = ;
    this.router.navigate(['quoteslist'], this.navigationextras);
  }
  resetForm(quotesForm?: FormGroup): void {
    if (quotesForm != null) {
      quotesForm.reset();
      this.quotesService.selectQuotes = this.quotes;

    }
  }

}
