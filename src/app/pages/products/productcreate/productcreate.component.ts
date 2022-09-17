import { Component, OnInit } from '@angular/core';
import { AngularFireStorageModule, GetDownloadURLPipeModule } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/page/services/products/products.service';
import { UploadImageService } from 'src/app/page/services/uploadImage/upload-image.service';
import { Products } from 'src/app/shared/models/products';
import { ImageClass } from 'src/app/shared/models/image-class';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss'],
})
export class ProductcreateComponent implements OnInit {
  valueitem: any = null;
  products!: Products;
  productsForm!: FormGroup;
  isOverDrop = false;
  urlImagen: string[];
  name!: string;
  finImage: any[] = [];
  pathImage = '../../../assets/img/cloud.png';
  public isNumber = /^([0-9]){1-20}$/;

  navigationextras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(
    private router: Router,
    public storage: AngularFireStorageModule,
    public productService: ProductsService,
    public formbuild: FormBuilder,
    public uploadImage: UploadImageService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
    this.CreateProductForm();
  }

  onUpload(e: any): void {
    this.name = e.target.value;
  }
  onUploadImage(event: any): void {
    const archivos = event.target.files;
    const nombre = this.uploadImage.generateFileName(this.name)
    this.uploadImage.uploadImage(nombre, archivos);
    this.urlImagen = this.uploadImage.getImages();    
    const image: ImageClass[] = [];
    console.log('la url :=>  ' , this.urlImagen);
  }
  onCreate(): void {
    this.router.navigate(['productcreate']);
  }
  onGoToDelete(valueitem: Products): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.productService.deleteProductList( valueitem.Id! );

  }
  onGoToBack(): void {
    this.router.navigate(['productlist']);
  }
  public CreateProductForm(): void {
     
    this.productsForm = this.formbuild.group({
      name: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(this.isNumber)]],
      quantity: ['', [Validators.required, Validators.pattern(this.isNumber)]],
      units: [''],
      description: ['', [Validators.required]],
      imageProduct: [[]],
    });
  }

  ngOnInit(): void {
    console.log(this.valueitem);
    if (typeof this.valueitem === 'undefined') {
      this.router.navigate(['productcreate']);
    } else {
      // this.urlImagen = this.valueitem.imageProduct.value;
      const countImage = Object.values(this.valueitem.imageProduct).length;
      const archivos = Object.values(this.valueitem.imageProduct);
      for (let i = 0; i < countImage; i++) {
        this.finImage[i] = archivos[i];
        //this.urlImagen[i] = archivos[i];
      }
      console.log(archivos);
      alert(this.finImage);
      this.productsForm.patchValue(this.valueitem);
    }
  }

  onSubmit(): void {
    for (let i = 0; i < this.urlImagen.length; i++) {
      this.productsForm.value.imageProduct[i] = this.urlImagen[i];
      console.log(
        this.productsForm.valid +
          '\nimagen' +
          i +
          ' ' +
          this.productsForm.value.imageProduct
      );
    }
    if (!this.productsForm.valid) {
      console.log(this.productsForm.value);
      const product = this.productsForm.value;
      const productId = this.valueitem?.Id || null;
      this.productService.insertProductList(product, productId);
      this.resetForm(this.productsForm);
      this.router.navigate(['productlist']);
    }
  }
  resetForm(productsForm: FormGroup): void {
    if (productsForm != null) {
      this.productsForm.reset();
      // this.productService.selectproduct =  this.valueitem;
    }
  }
}
