import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: 'appUICSSDirective'
})
export class AppDirectiveDirective {

  constructor(Element: ElementRef){ 
    Element.nativeElement.style.display = 'none';
    
  }

}