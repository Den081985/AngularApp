import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../../modes/product';
import { ModalService } from '../../services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'AngularApp';

  // products: IProduct[] = [];
  products$: Observable<IProduct[]>; //создается стрим products
  loading = false;
  term = '';
  //в приватное свойство конструктора сохраняем класс для запроса на сервер
  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {}

  //метод жизненного цикла компонента, соответствует монтированию
  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService
    //   .getData()
    //   .pipe(tap(() => (this.loading = false)));
    //подписываемся на стрим с запросом на сервер
    this.productsService.getData().subscribe(() => {
      this.loading = false;
    });
  }
}
