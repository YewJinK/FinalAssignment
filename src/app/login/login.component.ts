import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  pass: string;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    if (this.user && this.pass) {
      this.authService.login(this.user, this.pass).subscribe(
        user => {
          this.tokenStorage.saveToken(user.accessToken);
          this.tokenStorage.saveUser(user);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        },
        err => {
          //this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          alert('Invalid username/password!');
        }
      );
    }
  }

  reloadPage() {
    window.location.reload();
  }

  login(user: string, pass: string): any {
    const USERS: Array<{ username: string, password: string, token: string, role: string }> = [
      {
        username: "admin",
        password: "admin",
        token: "admin123",
        role: "admin"
      },
      {
        username: "user",
        password: "user",
        token: "user123",
        role: "user"
      },
    ]

    return USERS.find(x => x.username === user && x.password === pass);
  }
}
