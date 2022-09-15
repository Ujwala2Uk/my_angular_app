import { Component, OnInit } from '@angular/core';
import * as sn from '../music.json'

@Component({
  selector: 'app-musicextention',
  templateUrl: './musicextention.component.html',
  styleUrls: ['./musicextention.component.css']
})
export class MusicextentionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  music : any =(sn as any).default;
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-maximize';
    }
    else{
      content='fa-solid fa-minimize';
    }
    return content;
  }
}
