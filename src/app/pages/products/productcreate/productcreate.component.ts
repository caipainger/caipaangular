import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import {  Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss']
})
export class ProductcreateComponent implements OnInit {
  valueitem: any;
  products!: Products;
  productsForm!: FormGroup;
  productsFormImage!: FormGroup;
  uploadpercent!: Observable<any>;
  urlImage!: Observable<string>;
  finImage!: string;

  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };




  constructor(private router: Router,
              public storage: AngularFireStorage,
              public productService: ProductsService) {
    const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
    // this.CreateProductForm();
  }


  onUpload(e: any){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filepath = `Upload/Products/${id}`;
    const ref = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, file);
    console.log('subir ', e.target.files[0]);
    console.log('subir ', task.snapshotChanges);
    this.uploadpercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(( )=> this.urlImage = ref.getDownloadURL())).subscribe();
    //this.urlImage;
    //console.log(this.urlImage);

  }
  onCreate(): void{
     this.router.navigate(['productcreate']);
   }
  onGoToDelete(valueitem: Products): void{
   this.productService.removeProductos( valueitem.$key);
   console.log('has been deleted succesfull' + this.productService.removeProductos(valueitem.$key));
  }
  onGoToBack(): void{
    this.router.navigate(['productlist']);
    }
  // public CreateProductForm(): void{
  //   this.productsForm = this.formbuild.group({
  //     name: ['', Validators.required],
  //     type: ['', Validators.required],
  //     price: ['', Validators.required],
  //     quantity: ['', Validators.required],
  //     description: ['', Validators.required],
  //     image: ['imagemap']
  //   });
  // }

  ngOnInit(){

    this.productService.getProduct();

    if (typeof  this.valueitem === 'undefined'){
       this.router.navigate(['productcreate'], this.navigationextras);
     }else{
       this.productsForm = this.valueitem;
       this.productService.updateProductos(this.products);
       this.productsForm.setValue(this.products);
     }
  }

  onSubmit(productsForm: NgForm) {
    if (productsForm.value.$key == null) {
      this.productService.insertProductos(productsForm.value);
    }else {
      this.productService.updateProductos(productsForm.value);
    }

    // tslint:disable-next-line: no-non-null-assertion
    this.resetForm(productsForm);
    //console.log( this.urlImage);

  }
  resetForm(productsForm?: NgForm) {
    if (productsForm != null) {
      productsForm.reset();
      this.productService.selectproduct = new Products();
    }
  }

}



