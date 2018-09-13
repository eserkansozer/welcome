export class FxRecord {
  fromCurrency: string; 
  toCurrency: string;
  rate: number;

  constructor(fromCurrency:string, toCurrency: string, rate: number) {
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    this.rate = rate;
  }
}