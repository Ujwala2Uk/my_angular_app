import { Component, OnInit,Input } from '@angular/core';
import * as sn from '../music.json';
import { Cartitem } from 'src/app/cartitem';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-musicextention',
  templateUrl: './musicextention.component.html',
  styleUrls: ['./musicextention.component.css']
})
export class MusicextentionComponent implements OnInit {

  constructor() { }


  // cart:Cartitem={
  //   tracks:'',
  //   sname:'',
  //   siname:'',
  //   sid:0,
  //   img:''
    
    
  //   // price:0,
    
  //   // quantity:1,
  //   // totalPrice:1    
  // }
  // // quantity:number=1;

  // @Input()product:any

  // addToCart(product:any){
  //   this.cart.tracks=product.tracks;
  //   this.cart.sname=product.sname;
  //   this.cart.siname=product.siname;
  //   this.cart.sid=product.id;
  //   this.cart.img=product.img
    
  //   // this.cart.price=product.price;
    
   
    
  //   // this.cart.totalPrice=product.totalPrice;
  //   // this.cart.quantity=this.quantity;
    
  //   this.cartsvc.addToCart(this.cart);
  //   console.log(product.id);

  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'top',
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //   })

  //   Toast.fire({
  //     icon: 'success',
  //     title: 'Item added successfully'
  //   })
  //   this.cartsvc.getCount();
  // }
  



  @Input()song:any
  ngOnInit(): void {
  }

  music : any =(sn as any).default;
  productDetail=true;
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
