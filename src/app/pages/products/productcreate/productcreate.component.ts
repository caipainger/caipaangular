import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Products } from 'src/app/shared/models/products.interface';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss']
})
export class ProductcreateComponent implements OnInit {
  valueitem: any = null;
  productsForm!: FormGroup;
  productsFormImage!: FormGroup;

  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };
  
    
  
  constructor(private router: Router, private formbuild: FormBuilder) { 
    const navigation =this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state?.value;
    this.CreateProductForm();
  }

  ngOnInit(): void {
    if(typeof  this.valueitem === 'undefined'){
      this.router.navigate(['productcreate']);
    }else{
      this.productsForm.patchValue(this.valueitem);
    }
  }
  onSave(): void{
    
    console.log('saved',this.productsForm.value);
  }
  onCreate(): void{
    this.router.navigate(['productcreate']);
  }
  onGoToDelete(item: any): void{
    this.navigationextras.state = item;
   alert('has been deleted succesfull'+ this.navigationextras);
  }
  onGoToBack(): void{
    this.router.navigate(['productlist']);
    }
  public CreateProductForm(): void{
    this.productsForm = this.formbuild.group({
      name: ['',Validators.required],
      type: ['',Validators.required],
      price: ['',Validators.required],
      quantity: ['',Validators.required],
      description: ['',Validators.required],
      image: ['imagemap']
    });
  }  

}

