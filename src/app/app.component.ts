import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = '';
  //String interpolation

//Property binding
  // public logo = "assets/images/book4.jpg";

// Event binding
  // search()
  // {
  //   alert("Hello");
  // }

//Two-way binding
  // name="Ujwala";
 //Laptop

  //Event
 

 //parent child component method 
  productentered: string=' '  

  search_product(product_name:string):void{ 
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; 
    console.log(product_name)
  }
  ngOnInit(): void {
  }

}
