import { Component, OnInit } from '@angular/core';
import * as mytopdetails from './mytop.json'

@Component({
  selector: 'app-mytop',
  templateUrl: './mytop.component.html',
  styleUrls: ['./mytop.component.css']
})
export class MytopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popular: any=(mytopdetails as any ).default

}
