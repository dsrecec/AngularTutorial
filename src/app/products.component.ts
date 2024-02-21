import {Component} from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName: string = "A book";
  isDisabled: boolean = true;
  products = ['A Book', 'A Tree'];
  constructor() {
    setTimeout(
      () => {
        this.isDisabled = false;
      }, 3000)
  }


  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(product: string) {
    this.products = this.products.filter(p => p !== product);
  }
}
