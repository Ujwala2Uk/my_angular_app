import { Component, OnInit} from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-melody',
  templateUrl: './melody.component.html',
  styleUrls: ['./melody.component.css']
})
export class MelodyComponent implements OnInit {
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
