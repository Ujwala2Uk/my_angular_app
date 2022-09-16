import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  count:number=1;

  receiveValue($event : number){
    this.count=$event;
  }

}
