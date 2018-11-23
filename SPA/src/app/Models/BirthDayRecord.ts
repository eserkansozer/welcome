export class BirthDayRecord {
  id: number; 
  date: string;
  name: string;

  constructor(id:number, name: string, date: string) {
    this.id = id;
    this.name = name;
    this.date = date;
  }
}