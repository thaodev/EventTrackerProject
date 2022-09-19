import { DatePipe } from '@angular/common';
import { Stock } from 'src/app/models/stock';
import { SectorService } from './../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/sector';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  stocks: Stock[] | null = null;
  symbolInitials = new Set();
  selectedSymbol : string | any = 'All';
  keyword : string = '';
  constructor(private stockService: StockService, private datePipe : DatePipe) {}

  ngOnInit(): void {
    this.reloadStock();
    console.log('inside init');
  }

  formatDate(date : string | null){
     date = this.datePipe.transform(Date.now(), 'shortDate');
     return date;
  }

  reloadStock() {
    this.stockService.index().subscribe({
      next: (stocks) => {
        this.stocks = stocks;
        this.symbolInitials.add('All');
        for (let stock of stocks) {
          this.symbolInitials.add(stock.symbol.substring(0,1).toUpperCase());
        }

      },
      error: (problem) => {
        console.error(
          'StockHttpComponent.reloadSector(): error loading sector list'
        );
        console.error(problem);
      },
    });
  }


  peRatioFormat(ratio: number) {
    if (ratio > 20) {
      return 'text-success';
    } else if (ratio > 10) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }

  searchBySymbolKeyword(keyword: string): void {
    this.stockService.showBySymbolKeyword(keyword).subscribe({
      next: (result) => {
        this.stocks = result;
      },
      error: (nojoy) => {
        console.error(
          'StockHttpComponent.searchBySymbolKeyword(): error searching Search:'
        );
        console.error(nojoy);
      },
    });
  }
}
