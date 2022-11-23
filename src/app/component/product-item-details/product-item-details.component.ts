import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product_edit } from 'src/app/interfaces/product-edit';
import { Product } from 'src/app/interfaces/product-interfaces';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  Products : Product[]=[]
  product_edit:product_edit[]=[]
  theAlert:string=''
  quat:number = 1

  constructor( private rote:ActivatedRoute, private ProductService:ProductService ,  private CartService:CartService) { }

  ngOnInit(): void {
    let Products_ = this.rote.snapshot.params['id'];
    this.ProductService.getAllData().subscribe({
      next:(data)=>{
        this.Products = data
        this.Products = this.Products.filter(el =>el.id == Products_)

        this.add()
      }
    })
    console.log(Products_)
  }

  submi(q:number){
    this.theAlert = "You have Selected " + q+ " From " + this.Products[0].name + " Item"
   }
   add(){
    //  this.product_edit = JSON.parse(localStorage.getItem("cart")!)
    //  let store = this.product_edit.find(item=>item.item.id == this.Products[0].id)
     this.product_edit.push({item:this.Products[0],Quantity:this.quat})
    //  console.log(store)
     console.log(this.product_edit)

  }
  AddCrt(edit:product_edit){
    this.CartService.AddProduct(edit)
    alert("aaa")
    console.log(edit)
    this. product_edit.push(edit)
    console.log(this.product_edit)
  }


}
