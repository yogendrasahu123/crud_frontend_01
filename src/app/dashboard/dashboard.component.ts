import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private toastr: ToastrService) {}

  // Form fields
  fname: string = '';
  lname: string = '';
  email: string = '';
  number: string = '';
  salary: string = '';
  dob: string = '';
  course: string = '';
  checkbox1: boolean = true;

  // Form and edit control
  isUpdate: boolean = false;
  showForm: boolean = false;
  selectedIndex: number = -1;

  // Data
  addedData: any[] = [];

  // Show/hide form
  toggleForm() {
    this.clearForm();
    this.showForm = true;
    this.isUpdate = false;
  }

  // Add employee
  Add() {
    this.fname = this.fname.trim();
    this.lname = this.lname.trim();
    this.email = this.email.trim();
    this.number = this.number.trim();

    if (this.fname == null || this.fname == undefined || this.fname == '') {
      this.toastr.success('Plese Enter Name', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    if (this.lname == null || this.lname == undefined || this.lname == '') {
      this.toastr.success('Plese Enter Name', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.email == null || this.email == undefined || this.email == '') {
      this.toastr.error('Please Enter Email', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    if (!emailPattern.test(this.email)) {
      this.toastr.error('Invalid Email Format', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    const phonePattern = /^[6-9]\d{9}$/;
    if (this.number == null || this.number == undefined || this.number == '') {
      this.toastr.error('Please Enter Mobile Number', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    if (!phonePattern.test(this.number)) {
      this.toastr.error(
        'Invalid Mobile Number. Enter 10-digit number starting with 6-9.',
        '',
        {
          positionClass: 'toast-top-center',
        }
      );
      return;
    }
    this.salary = this.salary.toString().trim();
    const salaryPattern = /^[0-9]+(\.[0-9]{1,2})?$/;

    if (this.salary == null || this.salary == undefined || this.salary === '') {
      this.toastr.error('Please Enter Salary', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    if (!salaryPattern.test(this.salary)) {
      this.toastr.error('Invalid Salary Format. Enter a valid number.', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    this.dob = this.dob.trim();
    const dobDate = new Date(this.dob);
    const today = new Date();

    if (!this.dob) {
      this.toastr.error('Please Enter Date of Birth', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    if (isNaN(dobDate.getTime()) || dobDate > today) {
      this.toastr.error('Invalid or Future Date', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    const age =
      today.getFullYear() -
      dobDate.getFullYear() -
      (today < new Date(dobDate.setFullYear(today.getFullYear())) ? 1 : 0);

    if (age < 18) {
      this.toastr.error('You must be at least 18 years old', '', {
        positionClass: 'toast-top-center',
      });
      return;
    }

    const newEmp = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      number: this.number,
      salary: this.salary,
      dob: this.dob,
      course: this.course,
      checkbox1: this.checkbox1,
    };

    this.addedData.push(newEmp);
    this.clearForm();
    this.showForm = false;
  }

  // Edit employee
  editDetails(data: any) {
    this.fname = data.fname;
    this.lname = data.lname;
    this.email = data.email;
    this.number = data.number;
    this.salary = data.salary;
    this.dob = data.dob;
    this.course = data.course;
    this.checkbox1 = data.checkbox1;

    this.selectedIndex = this.addedData.indexOf(data);
    this.isUpdate = true;
    this.showForm = true;
  }

  // Update employee
  update() {
    this.addedData[this.selectedIndex] = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      number: this.number,
      salary: this.salary,
      dob: this.dob,
      course: this.course,
      checkbox1: this.checkbox1,
    };
    this.clearForm();
    this.isUpdate = false;
    this.showForm = false;
  }

  // Delete employee
  deleteData(index: number) {
    if (confirm('Delete this employee?')) {
      this.addedData.splice(index, 1);
    }
  }

  // Cancel form
  cancelForm() {
    this.clearForm();
    this.showForm = false;
    this.isUpdate = false;
  }

  // for reset form
  clearForm() {
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.number = '';
    this.salary = '';
    this.dob = '';
    this.course = '';
    this.checkbox1 = false;

    this.selectedIndex = -1;
  }
}
