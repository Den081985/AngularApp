import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //BehaviorSubject - стрим с обязательным начальным значением
  isVisible$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  open() {
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
  }
}
