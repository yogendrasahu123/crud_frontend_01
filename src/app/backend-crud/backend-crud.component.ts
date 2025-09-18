import { Component } from '@angular/core';
import { FormServiceService } from '../services/form-service.service';
import { HttpClient } from '@angular/common/http';
declare var bootstrap: any;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-backend-crud',
  templateUrl: './backend-crud.component.html',
  styleUrls: ['./backend-crud.component.css']
})
export class BackendCrudComponent {
  employeeList: any[] = [];
  fname = '';
  lname = '';
  email = '';
  phone_number = '';
  salary = '';
  dob = '';
  course = '';
  checkbox1 = false;
  showModal: boolean = false;

  constructor(private FormServiceService: FormServiceService,
    private toastr: ToastrService,
    private http: HttpClient) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  openForm() {
    const modalElement = document.getElementById('bootstrapModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  submit() {
    this.fname = this.fname.trim();
    this.lname = this.lname.trim();
    this.email = this.email.trim();

    if (this.fname == null || this.fname == undefined || this.fname == 'null' || this.fname == 'undefined' || this.fname == '') {
      this.toastr.warning('Plese Enter First Name', '', { positionClass: 'toast-top-center', });
      return;
    }
    if (this.lname == null || this.lname == undefined || this.lname == 'null' || this.lname == 'undefined' || this.lname == '') {
      this.toastr.warning('Plese Enter Last Name', '', { positionClass: 'toast-top-center', });
      return;
    }
    if (this.email == null || this.email == undefined || this.email == 'null' || this.email == 'undefined' || this.email == '') {
      this.toastr.warning('Plese Enter Email', '', { positionClass: 'toast-top-center', });
      return;
    }
    if (this.phone_number == null || this.phone_number == undefined || this.phone_number == 'null' || this.phone_number == 'undefined' || this.phone_number == '') {
      this.toastr.warning('Plese Enter Phone Number', '', { positionClass: 'toast-top-center', });
      return;
    } else if (this.phone_number.length < 10) {
      this.toastr.error('Plese Enter Valid Phone Number', '', { positionClass: 'toast-top-center', });
      return;
    }
    if (this.salary == null || this.salary == undefined || this.salary == 'null' || this.salary == 'undefined' || this.salary == '') {
      this.toastr.warning('Plese Enter Salary', '', { positionClass: 'toast-top-center', });
      return;
    }

    let payload = {
      fname: this.fname,
      lname: this.lname,
      email: this.email ? this.email : null,
      phone_number: this.phone_number,
      salary: this.salary,
      dob: this.dob,
      course: this.course,
      checkbox1: this.checkbox1
    }

    this.http.post<any>('http://localhost:3000/api/postData', payload).subscribe({
      next: res => {
        console.log('Status:', res);
        if (res.status == '200') {
          this.toastr.success('Data Submitted Successfully', '', { positionClass: 'toast-top-center', });
          this.getEmployeeList();
          this.resetForm();
          const modalElement = document.getElementById('bootstrapModal');
          if (modalElement) {
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) {
              modal.hide();
            }
          }
        }
      },
      error: err => {
        console.error('Error:', err);
      }
    });
  }
  getEmployeeList() {

    this.http.get<any>('http://localhost:3000/api/getData').subscribe({
      next: res => {
        this.employeeList = res; // Store the whole data
        console.log('Employee data:', res);
      },
      error: err => {
        console.error('Error:', err);



      }
    });
  }
  deleteEmp(row: any) {
    let empId = row.employee_id;
    this.http.delete<any>(`http://localhost:3000/api/deleteEmployee/${empId}`).subscribe({
      next: res => {
        if (res.status == '200') {
          this.toastr.success('Employee Deleted Successfully', '', { positionClass: 'toast-top-center', });
          // this.getEmployeeList();
          this.employeeList = this.employeeList.filter(d => d.employee_id != empId)
        }

      },
      error: err => {
        console.error('Delete error:', err.error.message);
      }
    });




  }
  resetForm() {
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.phone_number = '';
    this.salary = '';
    this.dob = '';
    this.course = '';
    this.checkbox1 = false;
  }

}
