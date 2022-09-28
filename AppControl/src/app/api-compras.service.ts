import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiComprasService {

  constructor(
    private http: HttpClient
  ) { }


  getAll() {
    return this.http.get('http://localhost:8080/api/compra');
  }

  create(compra: any) {
    return this.http.post('http://localhost:8080/api/compra', compra);
  }

  update(href: string, compra: any) {
    return this.http.put(href, compra);
  }

  delete(href: string) {
    return this.http.delete(href);
  }
}
