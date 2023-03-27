import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appQuadrato]'
})
export class QuadratoDirective {

  @Input()
  appQuadrato!:string
  constructor( private elem_ref : ElementRef, private render:Renderer2){}

  ngOnInit(){
    let corner =`${this.appQuadrato}`;
    this.render.setStyle(this.elem_ref.nativeElement, "boreder-radius", corner);
  }

}
