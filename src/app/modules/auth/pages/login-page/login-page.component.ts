import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession:boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',
        [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8),
        ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password)
      .subscribe(responseOk => {
          console.log('Successfully logged in 😁', responseOk);
          const { tokenSession, data} = responseOk
          this.cookie.set('token', tokenSession, 4, '/')
          this.router.navigate(['/', 'tracks'])
      },(err) => {
          this.errorSession = true;
          console.log('User not found 😥, please check your email or password', err);
        }
      )
  }

}
