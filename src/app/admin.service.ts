import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public authSubject = new Subject<boolean>();
  validateAuth(data:boolean) {
    this.authSubject.next(data);
  }
  hosturl=environment.adminapi;
  value?:boolean;
  getAuthStatus(){
  this.authSubject.subscribe(
    data => 
    {
      console.log('inside user service: ' + data);
      this.value= data;
      console.log('inside user service 11: ' + this.value);
    }
  );
  return this.value;
}

  constructor() { }
}
