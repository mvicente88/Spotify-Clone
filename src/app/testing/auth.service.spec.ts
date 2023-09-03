import { TestBed } from '@angular/core/testing';
import { AuthService } from '../modules/auth/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@modules/auth/auth.module';
import * as mockRaw from '../data/user.json'
import { of } from 'rxjs';


describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AuthModule
      ],
      declarations: [LoginPageComponent],
      providers: [HttpClientModule],  

    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  //Send credentials test

  it('Should return "data" and "tokenSession" object',
    (done: DoneFn) => {
    
    //Arrange

    const user: any = mockUser.userOk
    const mockResponse = {
      data: {},
      tokenSession:'xxxxxxxx'
    }

    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    )//API response

    //Act

    service.sendCredentials(user.email, user.password)
      .subscribe(responseApi => { // = ['data','tokenSession']
        const getProperties = Object.keys(responseApi)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        done()
    })
  })
  
  
  it('should return sum 2 + 3', () => {
    const a = 2
    const b = 3

    const c = service.sum(a, b)
    
    expect(c).toEqual(5)

  })
  


});