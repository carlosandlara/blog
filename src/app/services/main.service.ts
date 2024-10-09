import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.URL + '/blogs');
  }

  createBlog(data: any): Observable<any> {
    return this.http.post(this.URL + '/blogs', data);
  }
}
