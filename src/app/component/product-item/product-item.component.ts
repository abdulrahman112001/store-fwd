import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product_edit } from 'src/app/interfaces/product-edit';
import { Product } from 'src/app/interfaces/product-interfaces';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor( private ProductService:ProductService ) { }

  @Input() data!:Product
  @Output() item:EventEmitter<product_edit> = new EventEmitter()
  theAlert:string = ""

  qunt:number = 1

  ngOnInit(): void {
  }
  counter(i:number){
    return new Array(i);
  }
  add(){

    this.item.emit({item:this.data,Quantity:this.qunt})
  }
  submit(q:number){
    this.theAlert = "You have Selected " + q+ " From " + this.data.name + " Item"
  }

}
