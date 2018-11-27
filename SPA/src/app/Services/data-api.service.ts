import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataApiService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getByParameters(parameters: Array<{key: string, value: string}>) {
    let queryString  = '?';
    parameters.forEach(parameter => {
      queryString += parameter.key + '=' + parameter.value + '&';
    });

    return this.http.get(this.url + queryString);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
