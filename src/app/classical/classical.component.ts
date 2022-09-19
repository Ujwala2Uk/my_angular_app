import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-classical',
  templateUrl: './classical.component.html',
  styleUrls: ['./classical.component.css']
})
export class ClassicalComponent implements OnInit {
  isVisble:boolean =false;
  hide()
  {
    this.isVisble= !this.isVisble
  }

  contact: Contact[]=[];
  constructor(private contservice:ContactService) { }
  ngOnInit(): void {
    const contObserve = this.contservice.getConatctDetails( );
    contObserve.subscribe((contData:Contact[])=>{
      this.contact =contData;
    });
  }
  

}
