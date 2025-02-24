import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeOtherService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('https://api.example.com/data');
  }
}
