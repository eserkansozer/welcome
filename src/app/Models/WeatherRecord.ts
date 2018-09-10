export class WeatherRecord {
  temp: number; 
  description: string;
  city: string;
  icon: string

  constructor(temp:number, city: string, description: string, icon: string) {
    this.temp = temp;
    this.city = city;
    this.description = description;
    this.icon = icon;
  }
}