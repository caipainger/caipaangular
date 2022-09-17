import { Component, OnInit } from '@angular/core';
import { MessajesService } from 'src/app/page/services/messajes/messajes.service';

@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.scss']
})
export class QuoteslistComponent implements OnInit {

  messajeService!: MessajesService;
  message!: any;
  constructor() { }

  ngOnInit(): void {
    this.message = this.messajeService.getMessajes();
  }

}
