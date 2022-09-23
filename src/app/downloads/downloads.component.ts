import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import * as dwn from './downloadsong.json';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }
  cart:Cartitem={
    tracks:'',
    sname:'',
    siname:'',
    sid:0,
    img:'',
    price:0,
    quantity:1,
    totalPrice:1  
  }
  
  quantity:number=1;
  addToCart(product:any){
    this.cart.tracks=product.tracks;
    this.cart.sname=product.sname;
    this.cart.siname=product.siname;
    this.cart.sid=product.id;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.quantity=this.quantity;
    this.cart.totalPrice=product.totalPrice;

    this.cartsvc.addToCart(this.cart);
    console.log(product.id);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Song Downloaded successfully'
    })
    this.cartsvc.getCount();
  }

  @Input()product:any


  downloads: any=(dwn as any ).default
  @Input()song:any
  ngOnInit(): void {
  }

}
