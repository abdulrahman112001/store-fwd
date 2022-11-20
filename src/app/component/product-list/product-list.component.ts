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

  constructor( private ProductService:ProductService) { }
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
    if (localStorage.getItem("cart")) {
      this. product_edit = JSON.parse(localStorage.getItem("cart")!)
      let store = this. product_edit.find(item=>item.item.id == edit.item.id)
      if (store) {
        alert("Item "+ edit.item.name +" product is already in cart !")
        console.log(edit)
      }else{
        this. product_edit.push(edit)
        localStorage.setItem("cart",JSON.stringify(this. product_edit))
        alert(" Item "+edit.item.name+" Added")
      }
    }else{
      this. product_edit.push(edit)
      localStorage.setItem("cart",JSON.stringify(this. product_edit))
      alert("Item "+edit.item.name+" Added")
    }
  }
  }


