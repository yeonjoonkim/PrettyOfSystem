import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[OnHoverClass]',
  standalone: true,
})
export class OnHoverClassDirective {
  protected ref = inject(ElementRef);
  @Input('OnHoverClass') onHoverClass!: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (this.ref.nativeElement && this.onHoverClass) {
      this.ref.nativeElement.classList.add(this.onHoverClass);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.ref.nativeElement && this.onHoverClass) {
      this.ref.nativeElement.classList.remove(this.onHoverClass);
    }
  }
  constructor() {}
}
