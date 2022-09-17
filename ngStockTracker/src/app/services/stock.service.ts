import { Sector } from './../models/sector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'platform'
})
export class StockService {
  private baseUrl = 'http://localhost:8084/'; // adjust port to match server
  private url = this.baseUrl + 'api/stocks'; // change 'todos' to your API path
  constructor(private http: HttpClient) { }

  index(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('StockService.index(): error retrieving stock: ' + err)
        );
      })
      );
    }

    update(stock : Stock): Observable<Stock>{
      return this.http.put<Stock>(this.url +'/'+ stock.id, stock).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
             () => new Error( 'StockService.update(): error updating Stock: ' + err )
          );
        })
      );
    }

    showBySymbolKeyword(keyword : string):  Observable<Stock[]> {
      return this.http.get<Stock[]>(this.url +'/symbol/'+ keyword).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
             () => new Error( 'StockService.showBySymbolKeyword(): error search Symbol by Keyword: ' + err )
          );
        })
      );;
    }


}
