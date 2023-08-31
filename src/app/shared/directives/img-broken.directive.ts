import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handlerError():void {
    const elNative = this.Host.nativeElement
    console.log('This image URL is broken',this.Host);
    elNative.src= '../../../assets/broken-image.jpg'
  }

  constructor(private Host: ElementRef) {
    //console.log(this.Host)
   }

}
