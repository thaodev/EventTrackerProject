import { Stock } from './../models/stock';
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
          () => new Error('SectorService.index(): error retrieving sector: ' + err)
        );
      })
      );
    }

    stocksBySector(id: number): Observable<Stock[]> {
      return this.http.get<Stock[]>(this.url + '/'+ id + '/stocks ').pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('SectorService.stocksBySector(): error retrieving stocks by sector: ' + err)
          );
        })
        );
      }

      showById(id: number): Observable<Sector>{
        return this.http.get<Sector>(this.url + '/'+ id).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () => new Error('SectorService.sectorById(): error retrieving sector by id: ' + err)
            );
          })
          );
      }
}
