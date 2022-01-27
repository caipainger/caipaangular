import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, GetDownloadURLPipe } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { UploadImageService } from 'src/app/page/services/uploadImage/upload-image.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss']
})
export class ProductcreateComponent implements OnInit {
  valueitem: any = null;
  products!: Products;
  productsForm!: FormGroup;
  isOverDrop = false;
  urlImagen: any[] = [];
  name!: string ;
  finImage: any[] = [] ;
  pathImage = "../../../assets/img/cloud.png";
  public isNumber = /^([0-9]){1-20}$/;

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
    let countImage = Object.values(this.valueitem.imageProduct).length;
    let archivos =  Object.values(this.valueitem.imageProduct);
    console.log(archivos)
    for (let i = 0; i < countImage; i++) {
      this.finImage[i] = archivos[i];
      this.urlImagen[i] = archivos[i];
    }
    
    alert(this.finImage)
    this.CreateProductForm();
    
  }


  onUpload(e: any){
   this.name = e.target.value;   
    console.log(this.name);
  }
  onUploadImage(event: any){
    
    let archivos = event.target.files;
    for (let i = 0; i < archivos.length; i++) {     
    
    let reader = new FileReader();
    console.log(this.uploadImage+"\n");
    reader.readAsDataURL(archivos[i]);
    reader.onloadend = () => {
      this.finImage.push(reader.result);
      this.uploadImage.createImage(this.name, reader.result).then(urlImage =>{
        this.urlImagen[i] = urlImage;
        console.log(urlImage + "\n"+this.urlImagen[i]);
      });
      console.log(this.uploadImage+"\n");
    }
  }

    console.log(event.target.files);
  }
  onCreate(): void{
     this.router.navigate(['productcreate']);
   }
  onGoToDelete(valueitem: Products): void{
   this.productService.deleteProductList( valueitem.Id!);
   console.log('has been deleted succesfull' + this.productService.deleteProductList(valueitem.Id!));
  }
  onGoToBack(): void{
    this.router.navigate(['productlist']);
    }
  public CreateProductForm(): void{
     this.productsForm = this.formbuild.group({
       name: ['', [Validators.required]],
       tipo: ['', [Validators.required]],
       price: ['',[Validators.required, Validators.pattern(this.isNumber)]],
       quantity: ['',[Validators.required, Validators.pattern(this.isNumber)]],
       units: [''],
       description: ['', [Validators.required]],
       imageProduct: [[]] 
     });
   }

  ngOnInit(): void{
   if (typeof  this.valueitem === 'undefined'){
       this.router.navigate(['productcreate']);
     }else{
       //this.urlImagen = this.valueitem.imageProduct.value;
       this.productsForm.patchValue(this.valueitem);
     }
  }

  onSubmit() {
    for (let i = 0; i < this.urlImagen.length; i++) { 
    this.productsForm.value.imageProduct[i] = this.urlImagen[i];
    console.log(this.productsForm.valid+"\nimagen"+i +" " +this.productsForm.value.imageProduct)
    }
    if (!this.productsForm.valid) {
      console.log(this.productsForm.value)
      const product = this.productsForm.value;
      const productId = this.valueitem?.Id || null;
      this.productService.insertProductList(product, productId!)
      this.resetForm(this.productsForm);
      this.router.navigate(['productlist'])
    }


  }
  resetForm(productsForm: FormGroup): void {
    if (productsForm != null) {
      this.productsForm.reset();
      //this.productService.selectproduct =  this.valueitem;
    }
  }

}



