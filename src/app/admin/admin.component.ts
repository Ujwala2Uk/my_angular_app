import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { SongModel } from '../song-model';
import { SongapiService } from '../songapi.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formValue!: FormGroup;
  productModelObj : SongModel = new SongModel();
  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  // songname: FormControl | any;
  // singername: FormControl | any;
  // songtracks : FormControl|any;
 
  constructor(private formbuilder: FormBuilder, private api:SongapiService,) { }

  
  ngOnInit(): void {
  //   this.songname = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);
  //   this.singername = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);
  //   this.songtracks = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(16)]);
  //   this.formValue = new FormGroup({
  //   'sname': this.songname,
  //   'siname': this.singername,
  //   'tracks': this.songtracks,
  // })
    this.formValue = this.formbuilder.group({
      // id:[''],
      sname:[''],
      siname:[''],
      tracks:['']
    })
    this.getProducts();
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails(){
    // this.productModelObj.sid = this.formValue.value.sid;
    
    this.productModelObj.sname = this.formValue.value.sname;
    this.productModelObj.siname = this.formValue.value.siname;
    this.productModelObj.tracks= this.formValue.value.tracks;

    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("New Song added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      
      alert("The Song deleted!")
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = product.id;
    // this.formValue.controls['sid'].setValue(product.sid);
    
    this.formValue.controls['sname'].setValue(product.sname);
    this.formValue.controls['siname'].setValue(product.siname);
    this.formValue.controls['tracks'].setValue(product.tracks);
  }

  updateProductDetails(){
    // this.productModelObj.sid = this.formValue.value.sid;
    
    this.productModelObj.sname = this.formValue.value.sname;
    this.productModelObj.siname = this.formValue.value.siname;
    this.productModelObj.tracks = this.formValue.value.tracks;
    this.api.updateProducts(this.productModelObj, this.productModelObj.id).subscribe(res=>{
      alert("The Song updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }
}
