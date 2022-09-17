import { SectorService } from './../../services/sector.service';
import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/sector';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sectors: Sector [] | null = null;
  stocks: Stock [] | null = null;
  stockSelected: Stock | null = null;
  editStock: Stock | null = null;
  selected : Sector | null = null;
  constructor(
    private stockService: StockService, private sectorService: SectorService
  ) { }

  ngOnInit(): void {
    this.reloadSector();
  }

  reloadSector() {
    this.sectorService.index().subscribe(
      {
        next: (sectors) => {
          this.sectors = sectors;
        },
        error: (problem) => {
          console.error('SectorHttpComponent.reloadSector(): error loading sector list');
          console.error(problem);
        }
      }
    );
  }

  reloadStock() {
    this.stockService.index().subscribe(
      {
        next: (stocks) => {
          this.stocks = stocks;
        },
        error: (problem) => {
          console.error('SectorHttpComponent.reloadSector(): error loading sector list');
          console.error(problem);
        }
      }
    );
  }

  loadStocksBySector(sector: Sector){
    this.sectorService.stocksBySector(sector.id).subscribe({
        next: (stocks) => {
          this.selected = sector;
          this.stocks = stocks;
          console.log("sector clicked: " + this.selected.name);
          console.log("Number of Shares of stock 1" + stocks[0].numberOfShares);

        },
        error: (problem) => {
          console.error('StockListHttpComponent.loadStocksBySector(): error loading stock list');
          console.error(problem);
        }
    })
  }

  setEditStock() {
    this.editStock = Object.assign({}, this.stockSelected);
  }

  updateStock(stock: Stock): void {
    this.stockService.update(stock).subscribe({
      next: (result) => {
        console.log("stock to update: " + stock.symbol);
        this.editStock = null;
        this.stockSelected = result;
        this.reloadSector();
      },
      error: (nojoy) => {
        console.error('TodoListHttpComponent.updateStock(): error updating Stock:');
        console.error(nojoy);
      },
    });
  }



}
