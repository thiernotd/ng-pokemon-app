import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorederCard]'
})
export class BorederCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(180)
    this.setBorder('#f5f5f5')
   }

   @Input('appBorederCard') borderColor: string;


  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || '#009688')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5')
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

}
