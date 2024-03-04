import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[LeaveHoverClass]',
  standalone: true,
})
export class LeaveHoverClassDirective {
  protected ref = inject(ElementRef);
  @Input('LeaveHoverClass') onHoverClass!: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (this.ref.nativeElement && this.onHoverClass) {
      this.ref.nativeElement.classList.remove(this.onHoverClass);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.ref.nativeElement && this.onHoverClass) {
      this.ref.nativeElement.classList.add(this.onHoverClass);
    }
  }
  constructor() {}
}
