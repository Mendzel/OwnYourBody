import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  displayProductForm: boolean = false;
  productListChanged = new Subject<ProductModel[]>();
  productList: ProductModel[] = [
    {
      name: 'Pomidory',
      quantity: '2',
      unit: 'kg',
      price: 5,
      icon: 'clear',
    },
    {
      name: 'Ser',
      quantity: '200',
      unit: 'g',
      price: 8,
      icon: 'clear',
    },
    {
      name: 'Makaron',
      quantity: '1',
      unit: 'szt.',
      price: 3.5,
      icon: 'clear',
    },
  ];
  constructor() {}

  addNewProduct(product: ProductModel) {
    this.productList.push(product);
    this.productListChanged.next(this.productList.slice());
  }

  removeAllProducts() {
    this.productList = [];
    this.productListChanged.next();
  }

  removeSingleProduct(product: ProductModel) {
    let deleteIndex = this.productList.indexOf(product);
    this.productList.splice(deleteIndex, 1);
    this.productListChanged.next(this.productList.slice());
  }
}
