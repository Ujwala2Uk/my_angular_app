import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrls: ['./dance.component.css']
})
export class DanceComponent implements OnInit {
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
