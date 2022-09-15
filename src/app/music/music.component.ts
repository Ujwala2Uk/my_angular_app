import { Component, OnInit } from '@angular/core';
import * as songdetails from '../data/product.json';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }
  product:any = (songdetails as any).default;

  ngOnInit(): void {
  }

}
