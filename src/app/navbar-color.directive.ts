import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({ selector: "[navbar-color]" })
export class NavbarColor implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.el.nativeElement.style.color = 'blue';
    this.renderer.setStyle(this.el.nativeElement, "color", "blue");
  }
}
