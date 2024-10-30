import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://localhost:3000';

  constructor(private http: HttpClient) {}

  registerUser(newUser: any): Observable<any> {
    newUser.id = '';
    return this.http.post<any>(this.apiUrl + '/user/register', newUser);
  }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/user/login', {
      username,
      password,
    });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
}
