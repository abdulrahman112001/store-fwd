import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/data-users';
import { Product } from 'src/app/interfaces/product-interfaces';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  User:User[]=[]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.User.push(JSON.parse(localStorage.getItem("User")!))

  }
  clearstorage(){
    localStorage.clear()
    alert("Cart has been cleared")
    this.router.navigate(["/product-list"])
  }

}
