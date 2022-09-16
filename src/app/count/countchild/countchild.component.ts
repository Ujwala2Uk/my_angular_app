import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countchild',
  templateUrl: './countchild.component.html',
  styleUrls: ['./countchild.component.css']
})
export class CountchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counterValue=1;
  CounterLessThenOne=true;
  count=10;

  @Output() countEmitter=new EventEmitter();

  decrement(){
    if(this.counterValue!=1)
    {
      this.CounterLessThenOne=true;
      this.counterValue--;
    }
    this.Postvalue();
  }
  increment(){
    if(this.counterValue!=20)
    {
      this.counterValue++;
      this.CounterLessThenOne=true; 
     
    }
    this.Postvalue();
  }


  Postvalue(){
    this.countEmitter.emit(this.counterValue)
  }
}
