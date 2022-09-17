import { SectorService } from './../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/sector';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  sectors : Sector[] | null = null;
  selected : Sector | null = null;
  constructor(private sectorService : SectorService) { }

  ngOnInit(): void {
    this.reloadSector();
    console.log("inside init");
   }

   reloadSector() {
     this.sectorService.index().subscribe(
       {
         next: (sectors) => {
           this.sectors = sectors;
           console.log("sectors loaded" + sectors);

         },
         error: (problem) => {
           console.error('SectorHttpComponent.reloadSector(): error loading sector list');
           console.error(problem);
         }
       }
     );
   }
  //  loadStocksBySector(sector: Sector){
  //   this.sectorService.stocksBySector(sector.id).subscribe({
  //       next: (stocks) => {
  //         this.selected = sector;
  //        // this.stocks = stocks;
  //         console.log("sector clicked: " + this.selected.name);
  //         console.log("Number of Shares of stock 1" + stocks[0].numberOfShares);

  //       },
  //       error: (problem) => {
  //         console.error('StockListHttpComponent.loadStocksBySector(): error loading stock list');
  //         console.error(problem);
  //       }
  //   })
  // }

}
