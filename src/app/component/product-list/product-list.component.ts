import { CartService } from './../../services/cart.service';
import { product_edit } from './../../interfaces/product-edit';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product-interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private ProductService:ProductService, private CartService:CartService) { }
  Products : Product[]=[]
  product_edit:product_edit[]=[]
  searchText:string="";

  getProduct(){
    this.ProductService.getAllData().subscribe({
      next:(data)=>{
        this.Products = data
      }
    })
  }

  ngOnInit(): void {
    this.getProduct()
  }
  AddCrt(edit:product_edit){
    this.CartService.AddProduct(edit)
    alert("aaa")
    console.log(edit)
    this. product_edit.push(edit)
    console.log(this.product_edit)
  }
  }


