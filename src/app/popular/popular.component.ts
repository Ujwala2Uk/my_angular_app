import { Component, OnInit } from '@angular/core';
import * as populardetails from './popular.json';
// import * as productsong from '../data/product.json'
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

popular: any=(populardetails as any ).default;
// psongs : any=(productsong as any). default
}
