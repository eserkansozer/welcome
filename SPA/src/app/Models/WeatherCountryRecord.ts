export class WeatherCountryRecord {

    constructor(private name: string, private code: string) {    }

    get Code() {
      return this.code;
    }

    get Name() {
      return this.name;
    }
  }
