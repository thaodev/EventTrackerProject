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
  symbolInitials: string[] | null = null;
  selectedSymbol = 'all';
  keyword : string = '';
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    //this.reloadStock();
    this.loadStocksBySymbolSort();
    console.log('inside init');
  }

  reloadStock() {
    this.stockService.index().subscribe({
      next: (stocks) => {
        this.stocks = stocks;
      },
      error: (problem) => {
        console.error(
          'SectorHttpComponent.reloadSector(): error loading sector list'
        );
        console.error(problem);
      },
    });
  }

  loadStocksBySymbolSort() {
    this.reloadStock();
    if (this.stocks) {
      for (let stock of this.stocks) {
        this.symbolInitials?.push(stock.symbol.substring(0, 1));
      }
    }
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
          'TodoListHttpComponent.searchBySymbolKeyword(): error searching Search:'
        );
        console.error(nojoy);
      },
    });
  }
}
