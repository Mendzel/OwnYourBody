import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  newProduct = new FormGroup({
    name: new FormControl(),
    quantity: new FormControl(),
    unit: new FormControl(),
    price: new FormControl(),
  });

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.newProduct.value.icon = 'clear';
    this.shoppingListService.addNewProduct(this.newProduct.value);
    this.newProduct.patchValue({
      name: null,
      quantity: null,
      unit: null,
      price: null,
    });
    this.shoppingListService.displayProductForm =
      !this.shoppingListService.displayProductForm;
  }
}
