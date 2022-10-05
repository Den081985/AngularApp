import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit, AfterViewInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    return this.element.nativeElement.focus();
  }

  ngAfterViewInit(): void {}
}
