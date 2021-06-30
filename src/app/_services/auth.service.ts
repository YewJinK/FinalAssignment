import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: string, pass: string): Observable<any> {
    return this.http.post(environment.apiAuth + 'signin', {
      username: user,
      password: pass
    });
  }
}
