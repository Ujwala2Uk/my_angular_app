import { Component, OnInit } from '@angular/core';
import * as fvtdetails from './fvt.json'

@Component({
  selector: 'app-fvt',
  templateUrl: './fvt.component.html',
  styleUrls: ['./fvt.component.css']
})
export class FvtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  popular:any=(fvtdetails as any).default; 

}
