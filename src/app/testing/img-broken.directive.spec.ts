import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgBrokenDirective } from '../shared/directives/img-broken.directive';
import { Component, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';




@Component({
  template: '<img class="testing-directive" appImgBroken [src]= "srcMock">'
})

class TestComponent {
  public srcMock: any = null
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })


  it('should create an instance', () => {
    // Creating a simulated ElementRef object
    const elementRef = {
      nativeElement: document.createElement('div') // Can use any element here
    } as ElementRef;

    const directive = new ImgBrokenDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('TestComponent should be properly instantiated', () => {
    expect(component).toBeTruthy()

  })

  it('the directive should change the image to the default image in assets', (done: DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = beforeImgElement.src

      expect(afterImgSrc).toEqual('http://localhost:9876/assets/broken-image.jpg')
      done()

    },3000)



  })

});
