import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  //создается объект для работы с формой
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  //геттер для вывода ошибки
  get title() {
    return this.form.controls.title as FormControl;
  }

  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.productService
      .create({
        title: this.form.value.title as string,
        price: 42,
        description: 'some',
        category: 'clothes',
        image: 'some image',
        rating: {
          rate: 8,
          count: 6,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
