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

}
