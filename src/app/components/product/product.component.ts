import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  product!: IProduct;

  details = false;
}
