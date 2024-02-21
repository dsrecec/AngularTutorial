import {Subject} from "rxjs";

export class ProductsService {
  private products = ['A Book'];
  productsUpdated = new Subject();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(this.products);
  }

  getProducts(){
    //... is a next gen js functionality that creates a new array based on an existing array or a new array
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName)
    this.productsUpdated.next(this.products);
  }
}
