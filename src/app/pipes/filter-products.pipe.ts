import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../modes/product';

@Pipe({
  name: 'filterProducts',
})
//transform - метод, первым аргументом получает массив для фильтрации, вторым - поле фильтрации
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    if (search.length == 0) return products;
    return products.filter((prod) =>
      prod.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }
}
