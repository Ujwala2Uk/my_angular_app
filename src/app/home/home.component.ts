import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  title = 'Soul Tune';
  //String interpolation

//Property binding
  public logo = "assets/images/music4.jpg" ;

// Event binding
  // search()
  // {
  //   alert("Hello");
  // }

//Two-way binding
  name="Ujwala";
 //Laptop

  //Event

  ngOnInit(): void {
  }

}
