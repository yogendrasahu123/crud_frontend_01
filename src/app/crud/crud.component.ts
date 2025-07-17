import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  name: any;
  email: any;
  phone: any;
  address: any;
  submitedData: any[] = []
  isUpdate:boolean=false
  ngOnInIt() {}
  submit() {
    this.submitedData.push({
      id: this.submitedData.length + 1,
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
    });
    this.reset();
  }
  reset() {
    this.name = '';
    this.email = '';
    this.address = '';
    this.phone = '';
  }
  editDetail(){


   
  }
update(){
}



  delete(id: any) {
    let delId = this.submitedData.filter((item) => item.id == id);
    this.submitedData.splice(id,1);
  }
}
