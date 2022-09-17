export class Stock {

  id: number;
  symbol: string;
  company: string;
  peRatio: number;
  noOfShares: string;
  date: string;
  closePrice: number;

  constructor(
    id: number= 0,
  symbol: string= "",
  company: string= "",
  peRatio: number= 0,
  noOfShares: string= "",
  date: string= "",
  closePrice: number= 0,
  ) {
    this.id = id;
  this.symbol = symbol;
  this.company = company;
  this.peRatio = peRatio;
  this.noOfShares = noOfShares;
  this.date = date;
  this.closePrice = closePrice;
  }

}
