import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string | undefined;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  login() {
    this.authService.login();
    this.setMessage();

    this.authService.isAuthenticated()
      .then(isAuthenticated => {
        if(isAuthenticated) {
          let redirectUrl = this.authService.redirecUrl ? this.router.parseUrl(this.authService.redirecUrl): '/admin';
          this.router.navigateByUrl(redirectUrl);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'logged ';
    this.authService.isAuthenticated()
      .then((isAuthenticated) => {
        if (isAuthenticated as boolean) {
          this.message += 'in';
        } else {
          this.message += 'out';
        }
      });
  }
}
