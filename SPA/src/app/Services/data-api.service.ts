import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Injectable()
export class DataApiService {

  url: string;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getByParameters(parameters: Array<{key: string, value: string}>) {
    let httpParams  =  new HttpParams();
    parameters.forEach(parameter => {
      httpParams = httpParams.append(parameter.key, parameter.value);
    });

    return this.http.get(this.url, {params: httpParams});
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
