import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, NgForm } from '@angular/forms';
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
  quotesForm!: UntypedFormGroup;
  constructor(private router: Router,
              public quotesService: QuotesService) { }

  ngOnInit(): void {
  }
  onUpload(e: any): any{

  }
  onSubmit(quotesForm: NgForm): any{
    if (quotesForm.value.$key == null) {
      this.quotesService.insertCotizador(quotesForm.value);
    }else {
      this.quotesService.updateCotizar(quotesForm.value);
    }

    // tslint:disable-next-line: no-non-null-assertion
    this.resetForm(quotesForm);
    // console.log( this.urlImage);
  }
  onGoToBack(): any{

  }
  resetForm(quotesForm?: NgForm): any {
    if (quotesForm != null) {
      quotesForm.reset();
      this.quotesService.selectQuotes = new Messages();

    }
  }

}
