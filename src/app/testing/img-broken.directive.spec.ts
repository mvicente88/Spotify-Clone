import { ImgBrokenDirective } from '../shared/directives/img-broken.directive';
import { ElementRef } from '@angular/core';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    // Creating a simulated ElementRef object
    const elementRef = {
      nativeElement: document.createElement('div') // Can use any element here
    } as ElementRef;

    const directive = new ImgBrokenDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
