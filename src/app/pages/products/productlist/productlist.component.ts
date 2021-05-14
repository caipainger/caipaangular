import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { Products } from 'src/app/shared/models/products.interface';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
navigationextras: NavigationExtras = {
  state: {
    value: null
  }
};

ProductData = [
  {
id: 456213,
name: 'holayo',
type: 'mats',
quantity: 1,
description: 'aqui todo se puede'
  },
  {
    id: 65416,
    name: 'holayo',
    type: 'mts',
    quantity: 1,
    description: 'aqui todo cable se puede'
      },
      {
        id: 654846,
        name: 'holayo',
        type: 'mts',
        quantity: 1,
        description: 'aqui toma todo se puede'
          },
];
valueitem!: Products;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  onGoToDetails(item: any): void{
    this.navigationextras.state = item;
    this.router.navigate(['productdetails'], this.navigationextras);
  }
   
}
