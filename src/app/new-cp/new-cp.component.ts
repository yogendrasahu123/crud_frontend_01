import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-cp',
  templateUrl: './new-cp.component.html',
  styleUrls: ['./new-cp.component.css']
})
export class NewCpComponent  {

  name:any;
  email:any
  mobile:any
  address:any
  submittedData:any[]=[]
  updateEmail:any
  isUpdate:boolean=false
  ngOninit(){

  }

  submit(){
    const payload={
      'name':this.name,
      'email':this.email,
      'mobile':this.mobile,
      'address':this.address,
    }
    this.submittedData.push(payload);
    this.name=''
    this.email=''
    this.mobile=''
    this.address=''

  }

 editDetails(email:any){
  let result=this.submittedData?.filter((item)=>item.email==email);
  console.log(this.submittedData)
  this.isUpdate=true;
  this.name=result[0]?.name;
  this.email=result[0]?.email;
  this.mobile=result[0]?.mobile;
  this.address=result[0]?.address;
  }


  update(){
    const payload={
      'name':this.name,
      'email':this.email,
      'mobile':this.mobile,
      'address':this.address,
    }

    let indexId=this.submittedData?.findIndex((item)=>item.email==this.email);
    this.submittedData[indexId] = payload;
    this.isUpdate=false
    this.name=''
    this.email=''
    this.mobile=''
    this.address=''
  }
  deleteDetails(id:any){
    this.submittedData.splice(id,1);
  }
 }
