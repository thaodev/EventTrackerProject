import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Sector } from '../models/sector';
import { Injectable } from '@angular/core';
import { Stock } from './../models/stock';

@Injectable({
  providedIn: 'root',
})
export class SectorService {
  private baseUrl = 'http://localhost:8084/'; // adjust port to match server
  private url = this.baseUrl + 'api/sectors'; // change 'todos' to your API path
  private newStock : Stock | null = null;
  constructor(private http: HttpClient) {}

  index(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('SectorService.index(): error retrieving sector: ' + err)
        );
      })
    );
  }

  stocksBySector(id: number): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.url + '/' + id + '/stocks ').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'SectorService.stocksBySector(): error retrieving stocks by sector: ' +
                err
            )
        );
      })
    );
  }

  showById(id: number): Observable<Sector> {
    return this.http.get<Sector>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'SectorService.sectorById(): error retrieving sector by id: ' +
                err
            )
        );
      })
    );
  }

  createStockBySector(sectorId: number, stock : Stock): Observable<Stock> {
    return this.http.post<Stock>(this.url + '/' + sectorId + '/stock', stock).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'SectorService.createStockBySector(): error creating Stock by sector: ' + err )
        );
      })
    );
  }

  destroy(sectorId: number, stockId: number): Observable<void> {
    return this.http.delete<void>(this.url +'/'+ sectorId + '/stocks/' + stockId).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'SectorService.destroy(): error deleting Todo: ' + err )
        );
      })
    );
  }
}
