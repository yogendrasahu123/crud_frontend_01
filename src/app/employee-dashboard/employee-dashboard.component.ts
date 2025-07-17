import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent {
  // fname: any;
  // lname: any;
  // email: any;
  // number: any;
  // salary: any;
  // addedData: any[] = [];
  // updateEmail: any;
  // isUpdate: boolean = false;
  // ngOnInit() {}

  // Add() {
  //   const payload = {
  //     fname: this.fname,
  //     lname: this.lname,
  //     email: this.email,
  //     number: this.number,
  //     salary: this.salary,
  //   };
  //   this.addedData.push(payload);
  //   this.fname = '';
  //   this.lname = '';
  //   this.email = '';
  //   this.number = '';
  //   this.salary = '';
  // }

  // editDetails(email: any) {
  //   let result = this.addedData?.filter((item) => item.email == email);
  //   this.isUpdate = true;
  //   this.fname = result[0]?.fname;
  //   this.lname = result[0]?.lname;

  //   this.email = result[0]?.email;
  //   this.number = result[0]?.number;
  //   this.salary = result[0]?.salary;
  // }

  // update() {
  //   const payload = {
  //     fname: this.fname,
  //     lname: this.lname,

  //     email: this.email,
  //     number: this.number,
  //     salary: this.salary,
  //   };

  //   let indexId = this.addedData?.findIndex((item) => item.email == this.email);
  //   this.addedData[indexId] = payload;
  //   this.isUpdate = false;
  //   this.fname = '';
  //   this.lname = '';

  //   this.email = '';
  //   this.number = '';
  //   this.salary = '';
  // }
  // deleteData(id: any) {
  //   this.addedData.slice(id, 1);
  // }
  bootstrap: any;

  addedData: any[] = [];
  isUpdate: boolean = false;
  selectedEmail: string = '';

  fname: string = '';
  lname: string = '';
  email: string = '';
  number: number | null = null;
  salary: number | null = null;
  Add() {
    this.addedData.push({
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      number: this.number,
      salary: this.salary,
    });
    this.clearForm();
  }

  deleteData(index: number) {
    this.addedData.splice(index, 1);
  }

  // editDetails(email: string) {
  //   const item = this.addedData.find((x) => x.email === email);
  //   if (item) {
  //     this.fname = item.fname;
  //     this.lname = item.lname;
  //     this.email = item.email;
  //     this.number = item.number;
  //     this.salary = item.salary;
  //     this.selectedEmail = email;
  //     this.isUpdate = true;
  //   }
  // }
  editDetails(email: string) {
    const item = this.addedData.find((x) => x.email === email);
    if (item) {
      this.fname = item.fname;
      this.lname = item.lname;
      this.email = item.email;
      this.number = item.number;
      this.salary = item.salary;
      this.selectedEmail = email;
      this.isUpdate = true;

      // Open modal manually
      const modalElement = document.getElementById('exampleModal');
      if (modalElement) {
        const modal = new this.bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }

  update() {
    const index = this.addedData.findIndex(
      (x) => x.email === this.selectedEmail
    );
    if (index !== -1) {
      this.addedData[index] = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        number: this.number,
        salary: this.salary,
      };
    }
    this.isUpdate = false;
    this.clearForm();
  }

  clearForm() {
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.number = null;
    this.salary = null;
  }
}
