import { Component, OnInit } from '@angular/core';
import * as trackdetails from '../data/product.json';
@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  songs:any=(trackdetails as any).default;

}
