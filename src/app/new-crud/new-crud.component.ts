import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormServiceService } from '../services/form-service.service';
declare var bootstrap: any;
@Component({
  selector: 'app-new-crud',
  templateUrl: './new-crud.component.html',
  styleUrls: ['./new-crud.component.css']
})
export class NewCrudComponent {
  [x: string]: any;
  employeeList: any[] = [];

  fname = '';
  lname = '';
  email = '';
  phone_number = '';
  salary = '';
  course = '';
  dob = '';
  checkbox1 = false;
  showModal: boolean = false;

  constructor(private http: HttpClient, private toastrService: ToastrService, private form: FormServiceService) { }
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

    if (this.fname == null || this.fname == undefined || this.fname == '' || this.fname == 'null' || this.fname == 'undefined') {
      this.toastrService.warning('Plese Enter First Name', '', { positionClass: 'toast-top-center', });
      return;
    }
    if (this.lname == null || this.lname == undefined || this.lname == 'null' || this.lname == 'undefined' || this.lname == '') {
      this.toastrService.warning('Please enter last name', ' ', { positionClass: 'toast-top-center' })
    }



    let payload = {
      fname: this.fname,
      lname: this.lname,
      email: this.email ? this.email : null,
      phone_number: this.phone_number,
      course: this.course,
      salary: this.salary,
      dob: this.dob
    }
    let duplicateData = this.employeeList.length > 0 ? this.employeeList.filter(d => d.email_id == this.email) : []
    if (duplicateData.length > 0) {
      this.toastrService.warning('this email id is already exist ')
      return;
    }
    this.http.post<any>('http://localhost:3000/api/postData', payload).subscribe(res => {
      console.log(res, 'res');
      if (res.status == '200') {
        this.toastrService.success('Data Submitted Successfully', '', { positionClass: 'toast-top-center', });
        this.resetform();
        this.getEmployeeList()
        const modalElement = document.getElementById('bootstrapModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        }
      } else {
        this.toastrService.error('Some thing went wrong !', '', { positionClass: 'toast-top-center', });
      }
    }, error => {
      this.toastrService.error('Some thing went wrong !', '', { positionClass: 'toast-top-center', });
    })
    // this.getEmployeeList();


  }
  update() {
    this.fname = this.fname.trim();
    this.lname = this.lname.trim();
    this.email = this.email.trim();

    if (this.fname == null || this.fname == undefined || this.fname == '' || this.fname == 'null' || this.fname == 'undefined') {
      this.toastrService.warning('Plese Enter First Name', '', { positionClass: 'toast-top-center', });
      return;
    }
    if (this.lname == null || this.lname == undefined || this.lname == 'null' || this.lname == 'undefined' || this.lname == '') {
      this.toastrService.warning('Please enter last name', ' ', { positionClass: 'toast-top-center' })
    }

    let payload = {
      fname: this.fname,
      lname: this.lname,
      email: this.email ? this.email : null,
      phone_number: this.phone_number,
      course: this.course,
      salary: this.salary,
      dob: this.dob
    }

    this.http.post<any>(`http://localhost:3000/api/UpdateData/${this.editId}`, payload).subscribe(res => {
      console.log(res);
      if (res.status == '200') {
        this.toastrService.success('Data Updated Successfully', '', { positionClass: 'toast-top-center', });
        this.editId = null;
        this.showUpdateBtn = false;
        this.resetform();
        this.getEmployeeList()
        const modalElement = document.getElementById('bootstrapModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        }
      } else {
        this.toastrService.error('Some thing went wrong !', '', { positionClass: 'toast-top-center', });
      }
    }, error => {
      this.toastrService.error('Some thing went wrong !', '', { positionClass: 'toast-top-center', });
    })


  }
  deleteEmp(row: any) {

    let empId = row.employee_id;
    console.log(empId, 'empId');
    this.http.delete<any>(`http://localhost:3000/api/deleteData/${empId}`).subscribe(res => {
      console.log(res, 'res delete');
      if (res.status == '200') {
        this.toastrService.success('Data Deleted Successfully', '', { positionClass: 'toast-top-center', });
        this.employeeList = this.employeeList.filter(d => d.employee_id != empId);
      } else {
        this.toastrService.error('Some thing went wrong !', '', { positionClass: 'toast-top-center', });
      }
    }, error => {
      console.log(error, 'error');

      this.toastrService.error('Some thing went wrong !', '', { positionClass: 'toast-top-center', });
    })
  }
  showUpdateBtn: boolean = false;
  editId: any;
  editEmp(row: any) {
    this.showUpdateBtn = true
    console.log(row);
    this.fname = row.first_name;
    this.lname = row.last_name;
    this.email = row.email_id;
    this.phone_number = row.phone_no;
    this.dob = row.dob.split("T")[0];
    this.salary = row.salary;
    this.course = row.course;

    this.editId = row.employee_id;

    const modalElement = document.getElementById('bootstrapModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }


  }


  getEmployeeList() {
    this.http.get<any>('http://localhost:3000/api/getData').subscribe(res => {
      console.log(res, 'res');
      this.employeeList = res;
    });
  };
  resetform() {
    this.fname = '',
      this.lname = '',
      this.email = '',
      this.phone_number = '',
      this.course = '',
      this.salary = '',
      this.dob = '',
      this.checkbox1 = false;
  }
}
