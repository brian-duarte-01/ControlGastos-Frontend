import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGastosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/api/gasto');
  }

  create(gasto: any){
    return this.http.post('http://localhost:8080/api/gasto', gasto);
  }

  update(href: string, gasto: any){
    return this.http.put(href, gasto);
  }

  delete(href: string){
    return this.http.delete(href);
  }
}
