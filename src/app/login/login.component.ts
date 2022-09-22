import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  myForm: FormGroup | any;
  username: FormControl | any;
  password: FormControl | any;
  ngOnInit(): void {
    this.username = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);  
    this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)]);
    this.myForm = new FormGroup({
    'username': this.username,
    'password': this.password,
  })
  }
validation()
{
  if (this.username=='Ujwala' && this.password=='Ujwala123')
    return  

}
  
  

}
