import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product_edit } from 'src/app/interfaces/product-edit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private router:Router, private CartService:CartService) { }
    // cart:product_edit[]=[]

  cart:product_edit[]=[]
  totalAmount:number = 0
  isvalid:boolean = false;
  theName:string = "";
  theAddress:string = "";
  theCredit:number = 0
  ngOnInit(): void {

    this.getData()

  }
  getTotal(){
    this.totalAmount = 0
    for (let i = 0; i < this.cart.length; i++) {
    this.totalAmount += this.cart[i].Quantity * this.cart[i].item.price
    }
  return this.totalAmount
}
getData(){
  this.cart = this.CartService.product.filter((el)=>el)
  console.log(this.cart)
  this.getTotal()



}
totalChanged(amount:number,id:number){
  for (let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].item.id == id) {
        this.cart[i].Quantity = amount
        alert("Total Amount  Changed")
        this.getTotal()
    }
  }
}
submit(){
  let data = {name:this.theName,TotalPrice:this.totalAmount}
     localStorage.setItem("User",JSON.stringify(data))
      this.router.navigate(["/confirmation"])
      console.log(data)
}
removeProduct(id:number){
  for (let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].item.id == id) {
      alert("Item "+this.cart[i].item.name +" is  Removed")
      let index = this.cart.findIndex(x=>x.item.id == id)
      this.cart.splice(index,1)
      this.getData()
      
      console.log(this.cart)
    }
  }

}
}
