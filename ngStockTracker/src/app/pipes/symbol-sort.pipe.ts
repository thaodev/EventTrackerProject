import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../models/stock';

@Pipe({
  name: 'symbolSort'
})
export class SymbolSortPipe implements PipeTransform {

  transform(stocks: Stock[], symbolInit: string = 'All'): Stock[] {
    if (symbolInit === 'All'){
      return stocks;
    }
    const result: Stock[] = [];
    for (const stock of stocks) {
      for (const symbol of stock.symbol) {
        if (symbol.substring(0,1).toUpperCase() === symbolInit){
          result.push(stock);
          break;
        }
      }
    }
    return result;
  }

}
