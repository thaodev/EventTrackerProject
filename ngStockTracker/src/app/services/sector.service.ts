import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Sector } from '../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8084/'; // adjust port to match server
private url = this.baseUrl + 'api/sectors'; // change 'todos' to your API path

  constructor(private http: HttpClient) { }

  index(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SectorService.index(): error retrieving pokemon: ' + err)
        );
      })
      );
    }
}
