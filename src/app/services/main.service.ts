import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { BlogFormData, DialogFormData } from '../app-interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.URL}/blogs`);
  }

  getBlogById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/blogs/${id}`);
  }

  createBlog(data: any): Observable<any> {
    return this.http.post(this.URL + '/blogs', data);
  }

  updateBlog(data: any): Observable<any> {
    return this.http.put(this.URL + '/blogs/' + data.id, data);
  }
}
