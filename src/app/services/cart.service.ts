import { Product } from './../interfaces/product-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product_edit } from '../interfaces/product-edit';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 product: product_edit[] = [];
  product$ = new BehaviorSubject< product_edit []>(this.product);

  constructor( private http: HttpClient) { }


  url:string='../../assets/data.json'
  getAllData(){
    const subscription =  this.http.get<product_edit[]>(this.url).subscribe(el => {
      this.product = el
      this.product$.next(this.product)
       subscription.unsubscribe();
    })
  }

  AddProduct(Product:product_edit){
    this.product.push(Product)
    console.log(this.product)
    this.product$.next(this.product)

  }

}
