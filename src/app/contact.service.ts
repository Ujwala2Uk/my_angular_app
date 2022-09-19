import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//import class contact
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  cont: Contact[ ]=[
    {
      cname: "Music Dep",
      cnumber:1234567890,
      cemail:"music@gmail.com",
    },
    {
      cname: "Melody Dep",
      cnumber:4535326467,
      cemail:"melody@gmail.com",
    },
    {
      cname: "Dance Dep",
      cnumber:7436575665,
      cemail:"dance@gmail.com",
    },
    {
      cname: "Classical Dep",
      cnumber:6238648754,
      cemail:"classical@gmail.com",
    },
    {
      cname: "Others Dep",
      cnumber:2636487467,
      cemail:"others@gmail.com",
    }
  ]
  public getConatctDetails(): any{
    const ContObservable = new Observable( observe=>{
      setTimeout (()=>{
        observe.next(this.cont);
      }, 1000);
    });
    return ContObservable ;
 }
}
