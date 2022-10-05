import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errors$ = new Subject<string>();//стрим обработки ошибок

  handle(message: string) {
    this.errors$.next(message);//next уведомляет все компоненты подписанные на сообщение об ошибке
  }

  clear() {
    this.errors$.next('');//очистка сообщения об ошибке
  }
}
