import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../pages/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "https://localhost:7083/api/Products/";
  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get<Products[]>(this.baseUrl + "GetAllProduct");
  }


}
