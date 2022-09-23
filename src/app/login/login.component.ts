import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ln from './login.json'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted=false;
 
  public adminForm!:FormGroup;
  adminapi=environment.adminapi;

  get f() { return this.adminForm.controls; }
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router: Router, private adminService : AdminService) { }
  myForm: FormGroup | any;
  
  ngOnInit(): void {
    this.adminService.validateAuth(false);
    this.adminForm = this.formBuilder.group({
      username: ['', [Validators.required, ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  }

  admin(){
    this.submitted = true;
    if (this.adminForm.invalid) {
      return ;
    }
    this.http.get<any>(this.adminapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.username === this.adminForm.value.username && a.password=== this.adminForm.value.password
      });
   
      if(user){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'Login Successful'
      })
      this.adminForm.reset();
      this.router.navigate(['Admin'])
      
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'error',
        title: 'You are not Allowed to this page'
      })       
      this.adminService.validateAuth(false);
    }
  })
//   login()
//   {

//   }

//   s:any;
// proceed()
// {
//   if (this.username=='Ujwala' && this.password=='Ujwala123')
//     this.s = 

// }
  
  
  }
}
