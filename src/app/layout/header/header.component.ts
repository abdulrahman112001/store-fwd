import { Component, OnInit } from '@angular/core';
import { product_edit } from 'src/app/interfaces/product-edit';
import { Product } from 'src/app/interfaces/product-interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
