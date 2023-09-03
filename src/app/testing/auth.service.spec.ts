import { TestBed } from '@angular/core/testing';
import { AuthService } from '../modules/auth/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@modules/auth/auth.module';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AuthModule
      ],
      declarations: [LoginPageComponent],
      providers: [HttpClientModule],  

    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});