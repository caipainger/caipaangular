import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, GetDownloadURLPipe } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import {  Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { UploadImageService } from 'src/app/page/services/uploadImage/upload-image.service';
import { Products } from 'src/app/shared/models/products';
import { UploadImageClass } from 'src/app/shared/models/upload-image-class';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss']
})
export class ProductcreateComponent implements OnInit {
  valueitem: any;
  products!: Products;
  productsForm!: FormGroup;
  uploadimages: UploadImageClass [] = [];
  uploadpercent!: Observable<any>;
  isOverDrop = false;
  finImage!: string ;
  public isNumber = '/^([0-9]){1-20}$/';

  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };




  constructor(private router: Router,
              public storage: AngularFireStorage,
              public productService: ProductsService,
              public formbuild: FormBuilder,
              public uploadImage: UploadImageService) {
    const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
    this.CreateProductForm();
  }


  onUpload(){
    //this.uploadImage.uploadImage(e);
    this.uploadImage.uploadImage(this.uploadimages);
    for (let index of this.uploadimages) {
      this.products.image = index.urlImages;
      
    }
    /* const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filepath = `Upload/Products/${id}`;
    const ref = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, file);
    console.log('subir ', e.target.files[0]);
    console.log('subir ', task.snapshotChanges);
    this.uploadpercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(( ) => this.urlImage = ref.getDownloadURL())).subscribe();
    this.finImage = this.storage.refFromURL.toString();
    this.urlImage; */
    console.log('algo ahi' , this.products.image);
    

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
  public CreateProductForm(): void{
     this.productsForm = this.formbuild.group({
       $key: [''],
       name: ['', Validators.required],
       tipo: ['', Validators.required],
       price: ['', Validators.pattern(this.isNumber)],
       quantity: ['', Validators.pattern(this.isNumber)],
       units: [''],
       description: ['', Validators.required],
       image: ['']
     });
   }

  ngOnInit(): void{

   //  this.productService.getProduct();
 

   if (typeof  this.valueitem === 'undefined'){
       this.router.navigate(['productcreate'], this.navigationextras);
     }else{
       this.productsForm = this.valueitem;
       /* this.productService.updateProductos(this.products); */
       this.productsForm.setValue(this.products);
     }
  }

  onSubmit(): void {
    console.log( this.productsForm.value, 'saved', this.productService.insertProductos );
    this.productService.insertProductos(this.productsForm.value);
    if (this.productsForm.value.$key == null) {
      const result = this.productService.insertProductos(this.productsForm.value);
    }else {
      this.productService.updateProductos(this.productsForm.value);
    }

    // tslint:disable-next-line: no-non-null-assertion
    this.resetForm(this.productsForm);
    //console.log( this.urlImage); 

  }
  resetForm(productsForm: FormGroup): void {
    if (productsForm != null) {
      this.productsForm.reset();
      this.productService.selectproduct = new Products();
    }
  }

}



