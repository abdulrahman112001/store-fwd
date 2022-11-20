import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product_edit } from 'src/app/interfaces/product-edit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }
cart:product_edit[]=[]
  totalAmount:number = 0
  isvalid:boolean = false;
  theName:string = "";
theAddress:string = "";
theCredit:number = 0
  ngOnInit(): void {
    if(localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart")!)
      this.getTotal()
    }
  }
  getTotal(){
    this.totalAmount = 0
    for (let i = 0; i < this.cart.length; i++) {
    this.totalAmount += this.cart[i].Quantity * this.cart[i].item.price
    }

  return this.totalAmount

}

totalChanged(amount:number,id:number){
  for (let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].item.id == id) {
        this.cart[i].Quantity = amount

        localStorage.setItem("cart",JSON.stringify(this.cart))
        // alert("Total Amount Has Been Changed")
        this.getTotal()
    }
  }
}
submit(){
  let data = {name:this.theName,TotalPrice:this.totalAmount}
      localStorage.setItem("User",JSON.stringify(data))
      this.router.navigate(["/confirmation"])
}
//this function is used to remove items from cart and count back the total amout again
removeProduct(id:number){
  for (let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].item.id == id) {
      // alert("Item "+this.cart[i].item.name +" Has Been Removed")
      let index = this.cart.findIndex(x=>x.item.id == id)
      this.cart.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(this.cart))
      this.getTotal()

    }
  }

}
}
