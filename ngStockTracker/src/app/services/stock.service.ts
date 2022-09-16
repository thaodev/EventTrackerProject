import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl = 'http://localhost:8084/'; // adjust port to match server
  private url = this.baseUrl + 'api/stocks'; // change 'todos' to your API path
  constructor(private http: HttpClient) { }
}
