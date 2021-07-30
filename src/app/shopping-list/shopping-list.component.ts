import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(public shoppingListService: ShoppingListService) {}
  displayedColumns: string[] = ['name', 'quantity', 'price', 'icons'];
  dataSource = this.shoppingListService.productList;

  ngOnInit(): void {
    this.shoppingListService.productListChanged.subscribe(
      (productList: ProductModel[]) => {
        this.dataSource = productList;
      }
    );
  }

  onAdd() {
    this.shoppingListService.displayProductForm =
      !this.shoppingListService.displayProductForm;
  }
  onClear() {
    this.shoppingListService.removeAllProducts();
  }
  onRemove(product: ProductModel) {
    this.shoppingListService.removeSingleProduct(product);
  }
}
