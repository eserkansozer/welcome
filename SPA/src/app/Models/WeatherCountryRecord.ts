export class WeatherCountryRecord {

    constructor(public name: string, public code: string) {    }

    get Code() {
      return this.code;
    }

    get Name(){
      return this.name;
    }
  }
