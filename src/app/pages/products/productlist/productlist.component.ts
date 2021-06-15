import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { NavigationExtras, Router } from '@angular/router';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { Products } from 'src/app/shared/models/products';

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

  valueitem!: Products [] ;
productlist!: AngularFireList<any>;

  constructor(private router: Router, private firebase: AngularFireDatabase, public productService: ProductsService) { }



  ngOnInit(): void {
    this.productService.getProduct()
      .snapshotChanges()
      .subscribe(item => {
        this.valueitem = [];
        item.forEach(element => {
           let carga: any = element.payload.toJSON();
           carga['$key'] = element.key;
           this.valueitem.push(carga as Products);
        });
      });
  }

  onGoToDetails(item: Products): void{
    this.navigationextras.state = item;
    this.router.navigate(['productdetails'], this.navigationextras);
    alert('esto es lo que hay' + item.$key + item.description + item.name + item.price);
  }

}
