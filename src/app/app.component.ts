import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  //String interpolation

//Property binding
  public logo = "assets/images/book4.jpg";

// Event binding
  // search()
  // {
  //   alert("Hello");
  // }

//Two-way binding
  name="Ujwala";


}
