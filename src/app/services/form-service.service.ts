import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  message: any;
  constructor(private http: HttpClient) { }
  // getMessage() {
  //   this.http.get<any>('http://localhost:3000/api/test').subscribe({
  //     next: res => this.message = res.message,
  //     error: err => this.message = 'Error connecting'
  //   });
  // }
}
