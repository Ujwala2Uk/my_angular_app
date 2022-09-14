import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor() { }
 //parent child component method 

  _productname:any | undefined;

  @Input('product') 
  //write
  set pname(pname:any)
  {
    this._productname=pname || 'Please Enter the name';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this._productname;
  }

  ngOnInit(): void {
  }

}
