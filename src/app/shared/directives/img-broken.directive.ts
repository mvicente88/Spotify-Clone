import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string | boolean = false

  @HostListener('error') handlerError():void {
    const elNative = this.Host.nativeElement
    console.log('This image URL is broken',this.Host);

    if (this.customImg) {
      elNative.src = this.customImg
    } else {
      elNative.src = '../../../assets/broken-image.jpg'
    }
  }

  constructor(private Host: ElementRef) {
    //console.log(this.Host)
   }

}
