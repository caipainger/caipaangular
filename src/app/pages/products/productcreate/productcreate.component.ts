import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
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

  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };




  constructor(private router: Router,
              private formbuild: FormBuilder,
              public productService: ProductsService) {
    const navigation = this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
    // this.CreateProductForm();
  }

  // ngOnInit(): void {
  //   if (typeof  this.valueitem === 'undefined'){
  //     this.router.navigate(['productcreate'], this.navigationextras);
  //   }else{
  //     this.productsForm.patchValue(this.valueitem);
  //   }
  // }
  onSave(productsForm: NgForm): void{

    console.log('saved', productsForm.value);
  }
  onCreate(): void{
     this.router.navigate(['productcreate']);
   }
  onGoToDelete(valueitem: Products): void{
   this.productService.removeProductos( valueitem.$key);
   alert('has been deleted succesfull' + this.productService.removeProductos(valueitem.$key));
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
    alert('save wh' + productsForm.value);
  }
  resetForm(productsForm?: NgForm) {
    if (productsForm != null) {
      productsForm.reset();
      this.productService.selectproduct = new Products();
    }
  }

}

