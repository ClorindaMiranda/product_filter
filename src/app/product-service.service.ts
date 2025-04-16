import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';

export interface Producto {
  productId: number;
  productName: string;
  productDescription: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'https://localhost:7267/api/v1/Product';

  constructor( private http: HttpClient) { }

findByProductName(productName: string):Observable<Producto[]>
{
  const params= new HttpParams().set('productName',productName);
  return this.http.get<Producto[]>(this.apiUrl, {params});
}
}
