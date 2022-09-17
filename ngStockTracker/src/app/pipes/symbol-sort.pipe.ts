import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../models/stock';

@Pipe({
  name: 'symbolSort'
})
export class SymbolSortPipe implements PipeTransform {

  transform(stocks: Stock[], symbolInit: string = 'all'): Stock[] {
    if (symbolInit === 'all'){
      return stocks;
    }
    const result: Stock[] = [];
    for (const stock of stocks) {
      for (const symbol of stock.symbol) {
        if (symbol.substring(0,1) === symbolInit){
          result.push(stock);
        }
      }
    }
    return result;
  }

}
