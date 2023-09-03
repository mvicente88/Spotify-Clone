import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from '../modules/auth/pages/login-page/login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthModule } from '@modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AuthModule
      ],
      declarations: [LoginPageComponent],
      providers: [HttpClientModule],  
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // First test
  
  // It must be ensured that the form is invalid when the data entered is wrong
  it('should return wrong form', () => {

    //Arrange

    const mockCredential = {
      email: '0x0x0x0x0',
      password:'123456'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //Act

    emailForm?.setValue(mockCredential.email)
    passwordForm?.setValue(mockCredential.password)

    //Assert

    expect(component.formLogin.invalid).toEqual(true);
  });


  it('should return OK form', () => {

    //Arrange

    const mockCredential = {
      email: 'test@test.com',
      password:'12345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //Act

    emailForm?.setValue(mockCredential.email)
    passwordForm?.setValue(mockCredential.password)

    //Assert

    expect(component.formLogin.invalid).toEqual(false);
  });



  it('"Log in" text in Log in button', () => {
    
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Log in')
  })
});
