import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  myForm: FormGroup | any;
  username: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  mobile: FormControl | any;
  ngOnInit(): void {
    this.username = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);
        this.useremail = new FormControl('', [Validators.required]);
        this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)]);
        this.mobile = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
        this.myForm = new FormGroup({
          'username': this.username,
          'useremail': this.useremail,
          'password': this.password,
          'mobile': this.mobile
        })
  }
  onSubmit()
    {
      this.router.navigate(['Home']);
      console.log(this.myForm);
    }
}
