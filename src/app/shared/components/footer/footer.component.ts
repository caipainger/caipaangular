import { FormatWidth, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  datetime!: Date;
  constructor(){

  }

  FechaActual(locale: string, width: FormatWidth){
   //this.datetime = moment( new this.datetime.getUTCDate();
  }


  ngOnInit(): void {
  }

}
