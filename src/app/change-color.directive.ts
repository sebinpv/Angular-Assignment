import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone:true
})
export class ChangeColorDirective implements OnInit {
  @Input('appChangeColor') color: string = 'black'; // Default color if none is provided

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Use Renderer2 to safely manipulate the DOM
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }
}
