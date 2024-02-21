import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  @Input() productName!: string;
  @Output() productClicked = new EventEmitter();
  constructor() {
  }

  onClicked() {
    this.productClicked.emit();
  }

  ngOnInit(): void {
  }
}
