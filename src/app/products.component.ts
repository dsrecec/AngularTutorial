import {Component, OnDestroy, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ProductsService} from "./products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy{
  productName: string = "A book";
  isDisabled: boolean = true;
  products : string[] = [];
  private productsSubscription: Subscription = new Subscription;
  constructor(private productsService: ProductsService) {
    setTimeout(
      () => {
        this.isDisabled = false;
      }, 3000)

  //  this.products = this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      () => {
       this.products = this.productsService.getProducts();
      });
  }
  onAddProduct(f: NgForm) {
    //this.products.push(this.productName);
    console.log(f.value)
    if(f.valid){
      //this.products.push(f.value.productName);
      this.productsService.addProduct(f.value.productName);
    //  this.products = this.productsService.getProducts();
    }
  }
  onRemoveProduct(product: string) {
    this.products = this.products.filter(p => p !== product);
  }
  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}
