import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8084/'; // adjust port to match server
private url = this.baseUrl + 'api/sectors'; // change 'todos' to your API path

  constructor() { }
}
