import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  urlApiService='';
  constructor() {
    this.urlApiService=localStorage.getItem('urlApiService')!;
  }
  private readonly _http= inject(HttpClient);
  getAllProducts(): Observable<any> {
    return this._http.get(this.urlApiService);
  }
}
