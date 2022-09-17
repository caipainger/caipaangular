import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistadminComponent } from './productlistadmin.component';

describe('ProductlistadminComponent', () => {
  let component: ProductlistadminComponent;
  let fixture: ComponentFixture<ProductlistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
