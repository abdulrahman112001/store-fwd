import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

url:string='../../assets/data.json'
  getAllData():Observable<any>{
    return this.http.get(this.url)
  }
}
