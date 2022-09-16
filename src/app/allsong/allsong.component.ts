import { Component, OnInit } from '@angular/core';
import * as allsongs from '../data/product.json';
@Component({
  selector: 'app-allsong',
  templateUrl: './allsong.component.html',
  styleUrls: ['./allsong.component.css']
})
export class AllsongComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

alls : any=(allsongs as any).default;
}
