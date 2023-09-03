import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from '../modules/auth/pages/login-page/login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthModule } from '@modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

describe('AuthPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AuthModule
      ],
      declarations: [LoginPageComponent],
      providers: [HttpClientModule],  
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
