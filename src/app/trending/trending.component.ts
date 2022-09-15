import { Component, OnInit } from '@angular/core';
import * as trenddetails from './trend.json'

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popular: any=(trenddetails as any ).default;

}
