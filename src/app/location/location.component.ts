import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  constructor(private toastr: ToastrService) { }
  // Form variables
  fname = '';
  lname = '';
  email = '';
  number = '';
  salary = '';
  dob = '';
  course = '';
  checkbox1 = false;

  // Dropdowns
  selectedDistrict = null;
  selectedBlock = null;
  selectedVillage: any = null;
  blockList: any[] = [];
  villegeList: any[] = [];
  // Form controls
  showForm = false;
  isUpdate = false;
  editIndex = -1;
  addedData: any[] = [];

  // Dummy Data
  districtList = [
    { district_id: 1, district_name: 'Lucknow' },
    { district_id: 2, district_name: 'Kanpur Nagar' },
    { district_id: 3, district_name: 'Varanasi' },
    { district_id: 4, district_name: 'Agra' },
    { district_id: 5, district_name: 'Meerut' },
    { district_id: 6, district_name: 'Gorakhpur' },
    { district_id: 7, district_name: 'Prayagraj' },
    { district_id: 8, district_name: 'Bareilly' },
    { district_id: 9, district_name: 'Saharanpur' },
    { district_id: 10, district_name: 'Aligarh' },
  ];
  tempBlockList = [
    { block_id: 101, block_name: 'Malihabad', district_id: 1 },
    { block_id: 102, block_name: 'Sarojini Nagar', district_id: 1 },
    { block_id: 201, block_name: 'Sadar', district_id: 2 },
    { block_id: 202, block_name: 'Ghatampur', district_id: 2 },
    { block_id: 301, block_name: 'Pindra', district_id: 3 },
    { block_id: 302, block_name: 'Harahua', district_id: 3 },
    { block_id: 401, block_name: 'Etmadpur', district_id: 4 },
    { block_id: 402, block_name: 'Kheragarh', district_id: 4 },
    { block_id: 501, block_name: 'Rohta', district_id: 5 },
    { block_id: 502, block_name: 'Mawana', district_id: 5 },
    { block_id: 601, block_name: 'Pipraich', district_id: 6 },
    { block_id: 602, block_name: 'Bansgaon', district_id: 6 },
    { block_id: 701, block_name: 'Karchhana', district_id: 7 },
    { block_id: 702, block_name: 'Soraon', district_id: 7 },
    { block_id: 801, block_name: 'Bithri Chainpur', district_id: 8 },
    { block_id: 802, block_name: 'Mirganj', district_id: 8 },
    { block_id: 901, block_name: 'Nakur', district_id: 9 },
    { block_id: 902, block_name: 'Sarsawa', district_id: 9 },
    { block_id: 1001, block_name: 'Iglas', district_id: 10 },
    { block_id: 1002, block_name: 'Khair', district_id: 10 },
  ];

  tempVillageList = [
    { village_id: 1, village_name: 'Bhitauli', block_id: 101 },
    { village_id: 2, village_name: 'Kakori', block_id: 101 },
    { village_id: 3, village_name: 'Dubbaga', block_id: 101 },
    { village_id: 4, village_name: 'Mohammadpur', block_id: 101 },
    { village_id: 5, village_name: 'Mohanlalganj', block_id: 101 },
    { village_id: 6, village_name: 'Banthra', block_id: 102 },
    { village_id: 7, village_name: 'Amausi', block_id: 102 },
    { village_id: 8, village_name: 'Kanshiram Nagar', block_id: 102 },
    { village_id: 9, village_name: 'Piparsand', block_id: 102 },
    { village_id: 10, village_name: 'Ahmadpur', block_id: 102 },

    { village_id: 11, village_name: 'Raipurwa', block_id: 201 },
    { village_id: 12, village_name: 'Kidwai Nagar', block_id: 201 },
    { village_id: 13, village_name: 'Rawatpur', block_id: 201 },
    { village_id: 14, village_name: 'Bithoor', block_id: 201 },
    { village_id: 15, village_name: 'Shivrajpur', block_id: 201 },
    { village_id: 16, village_name: 'Chakeri', block_id: 202 },
    { village_id: 17, village_name: 'Prempur', block_id: 202 },
    { village_id: 18, village_name: 'Baraur', block_id: 202 },
    { village_id: 19, village_name: 'Hilauli', block_id: 202 },
    { village_id: 20, village_name: 'Rura', block_id: 202 },

    { village_id: 21, village_name: 'Lohra', block_id: 301 },
    { village_id: 22, village_name: 'Ghamhapur', block_id: 301 },
    { village_id: 23, village_name: 'Chandpur', block_id: 301 },
    { village_id: 24, village_name: 'Sikraul', block_id: 301 },
    { village_id: 25, village_name: 'Phulwaria', block_id: 301 },
    { village_id: 26, village_name: 'Chandmari', block_id: 302 },
    { village_id: 27, village_name: 'Koirajpur', block_id: 302 },
    { village_id: 28, village_name: 'Lachhimanpur', block_id: 302 },
    { village_id: 29, village_name: 'Babatpur', block_id: 302 },
    { village_id: 30, village_name: 'Kandwa', block_id: 302 },

    { village_id: 31, village_name: 'Kailashpur', block_id: 401 },
    { village_id: 32, village_name: 'Nagla Beech', block_id: 401 },
    { village_id: 33, village_name: 'Kheragarh', block_id: 401 },
    { village_id: 34, village_name: 'Tajganj', block_id: 401 },
    { village_id: 35, village_name: 'Dayalbagh', block_id: 401 },
    { village_id: 36, village_name: 'Bainpur', block_id: 402 },
    { village_id: 37, village_name: 'Seenghar', block_id: 402 },
    { village_id: 38, village_name: 'Nagla Ram', block_id: 402 },
    { village_id: 39, village_name: 'Rohrai', block_id: 402 },
    { village_id: 40, village_name: 'Baroli', block_id: 402 },

    { village_id: 41, village_name: 'Sardhana', block_id: 501 },
    { village_id: 42, village_name: 'Puth', block_id: 501 },
    { village_id: 43, village_name: 'Daurala', block_id: 501 },
    { village_id: 44, village_name: 'Pabli Khas', block_id: 501 },
    { village_id: 45, village_name: 'Jani', block_id: 501 },
    { village_id: 46, village_name: 'Bhuma', block_id: 502 },
    { village_id: 47, village_name: 'Hastinapur', block_id: 502 },
    { village_id: 48, village_name: 'Bhawanpur', block_id: 502 },
    { village_id: 49, village_name: 'Kaithwari', block_id: 502 },
    { village_id: 50, village_name: 'Bahsuma', block_id: 502 },

    { village_id: 51, village_name: 'Bhojpur', block_id: 601 },
    { village_id: 52, village_name: 'Jungle Kauriya', block_id: 601 },
    { village_id: 53, village_name: 'Sahjanwa', block_id: 601 },
    { village_id: 54, village_name: 'Chargawan', block_id: 601 },
    { village_id: 55, village_name: 'Khorabar', block_id: 601 },
    { village_id: 56, village_name: 'Barhalganj', block_id: 602 },
    { village_id: 57, village_name: 'Kauriram', block_id: 602 },
    { village_id: 58, village_name: 'Maniram', block_id: 602 },
    { village_id: 59, village_name: 'Chauri-Chaura', block_id: 602 },
    { village_id: 60, village_name: 'Uruwa', block_id: 602 },

    { village_id: 61, village_name: 'Meja', block_id: 701 },
    { village_id: 62, village_name: 'Urfata', block_id: 701 },
    { village_id: 63, village_name: 'Bara', block_id: 701 },
    { village_id: 64, village_name: 'Shankargarh', block_id: 701 },
    { village_id: 65, village_name: 'Jasra', block_id: 701 },
    { village_id: 66, village_name: 'Phulpur', block_id: 702 },
    { village_id: 67, village_name: 'Holagarh', block_id: 702 },
    { village_id: 68, village_name: 'Mau Aima', block_id: 702 },
    { village_id: 69, village_name: 'Bahadurpur', block_id: 702 },
    { village_id: 70, village_name: 'Kaundhiyara', block_id: 702 },

    { village_id: 71, village_name: 'Faridpur', block_id: 801 },
    { village_id: 72, village_name: 'Nawabganj', block_id: 801 },
    { village_id: 73, village_name: 'Bhagwanpur', block_id: 801 },
    { village_id: 74, village_name: 'Aliganj', block_id: 801 },
    { village_id: 75, village_name: 'Sirauli', block_id: 801 },
    { village_id: 76, village_name: 'Ram Nagar', block_id: 802 },
    { village_id: 77, village_name: 'Baheri', block_id: 802 },
    { village_id: 78, village_name: 'Sainthal', block_id: 802 },
    { village_id: 79, village_name: 'Bhamora', block_id: 802 },
    { village_id: 80, village_name: 'Devraniya', block_id: 802 },

    { village_id: 81, village_name: 'Deoband', block_id: 901 },
    { village_id: 82, village_name: 'Gangoh', block_id: 901 },
    { village_id: 83, village_name: 'Titron', block_id: 901 },
    { village_id: 84, village_name: 'Sarsawa', block_id: 901 },
    { village_id: 85, village_name: 'Rampur Maniharan', block_id: 901 },
    { village_id: 86, village_name: 'Badgaon', block_id: 902 },
    { village_id: 87, village_name: 'Manak Mau', block_id: 902 },
    { village_id: 88, village_name: 'Fatehpur', block_id: 902 },
    { village_id: 89, village_name: 'Itmadpur', block_id: 902 },
    { village_id: 90, village_name: 'Buria', block_id: 902 },

    { village_id: 91, village_name: 'Quarsi', block_id: 1001 },
    { village_id: 92, village_name: 'Dhanipur', block_id: 1001 },
    { village_id: 93, village_name: 'Bijauli', block_id: 1001 },
    { village_id: 94, village_name: 'Atrauli', block_id: 1001 },
    { village_id: 95, village_name: 'Tappal', block_id: 1001 },
    { village_id: 96, village_name: 'Jawan', block_id: 1002 },
    { village_id: 97, village_name: 'Lodha', block_id: 1002 },
    { village_id: 98, village_name: 'Gonda', block_id: 1002 },
    { village_id: 99, village_name: 'Sasni', block_id: 1002 },
    { village_id: 100, village_name: 'Jattari', block_id: 1002 },
  ];

  toggleForm() {
    this.showForm = true;
    this.clearForm();
    this.isUpdate = false;
  }

  cancelForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.number = '';
    this.salary = '';
    this.dob = '';
    this.course = '';
    this.checkbox1 = false;
    this.selectedBlock = null;
    this.selectedBlock = null;
    this.selectedVillage = null;
    this.blockList = [];
    this.villegeList = [];
    this.editIndex = -1;
  }


  Add() {
    // validation

    // if (this.fname == null || this.fname == undefined || this.fname == '') {
    //   this.toastr.success('Plese Enter Name', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // if (this.lname == null || this.lname == undefined || this.lname == '') {
    //   this.toastr.success('Plese Enter Name', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (this.email == null || this.email == undefined || this.email == '') {
    //   this.toastr.error('Please Enter Email', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // if (!emailPattern.test(this.email)) {
    //   this.toastr.error('Invalid Email Format', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }
    // const phonePattern = /^[6-9]\d{9}$/;
    // if (this.number == null || this.number == undefined || this.number == '') {
    //   this.toastr.error('Please Enter Mobile Number', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // if (!phonePattern.test(this.number)) {
    //   this.toastr.error(
    //     'Invalid Mobile Number. Enter 10-digit number starting with 6-9.',
    //     '',
    //     {
    //       positionClass: 'toast-top-center',
    //     }
    //   );
    //   return;
    // }
    // this.salary = this.salary.toString().trim();
    // const salaryPattern = /^[0-9]+(\.[0-9]{1,2})?$/;

    // if (this.salary == null || this.salary == undefined || this.salary === '') {
    //   this.toastr.error('Please Enter Salary', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // if (!salaryPattern.test(this.salary)) {
    //   this.toastr.error('Invalid Salary Format. Enter a valid number.', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }
    // this.dob = this.dob.trim();
    // const dobDate = new Date(this.dob);
    // const today = new Date();

    // if (!this.dob) {
    //   this.toastr.error('Please Enter Date of Birth', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // if (isNaN(dobDate.getTime()) || dobDate > today) {
    //   this.toastr.error('Invalid or Future Date', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }

    // const age =
    //   today.getFullYear() -
    //   dobDate.getFullYear() -
    //   (today < new Date(dobDate.setFullYear(today.getFullYear())) ? 1 : 0);

    // if (age < 18) {
    //   this.toastr.error('You must be at least 18 years old', '', {
    //     positionClass: 'toast-top-center',
    //   });
    //   return;
    // }
    // if (!this.checkbox1) {
    //   alert('Please confirm that all information is true.');
    //   return;
    // }
    // Validation End


    this.addedData.push(
      this.requestData()
    );

    this.cancelForm();
  }

  editDetails(data: any) {

    this.fname = data.fname;
    this.lname = data.lname;
    this.email = data.email;
    this.number = data.number;
    this.salary = data.salary;
    this.dob = data.dob;
    this.course = data.course;
    this.selectedDistrict = data.district_id;
    this.changeDistrict();
    this.selectedBlock = data.block_id;
    this.changeBlock();
    this.selectedVillage = data.village_id;


    this.isUpdate = true;
    this.showForm = true;
    this.editIndex = this.addedData.indexOf(data);

  }

  update() {
    if (this.editIndex > -1) {
      this.addedData[this.editIndex] = this.requestData();
      this.cancelForm();
    }
  }

  deleteData(index: number) {
    this.addedData.splice(index, 1);
  }

  changeDistrict() {
    this.blockList = this.tempBlockList.filter(
      (d) => d.district_id == this.selectedDistrict
    );
    console.log(this.blockList);

  }
  changeBlock() {
    this.villegeList = this.tempVillageList.filter(
      (d) => d.block_id == this.selectedBlock
    );
  }

  // requestData(): {} {
  //   let selectedDistName = this.districtList.filter((d) => d.district_id == this.selectedDistrict)[0].district_name;
  //   let selectedBlockName = this.tempBlockList.filter((d) => d.block_id == this.selectedBlock)[0].block_name;
  //   let selectedVillageName = this.tempVillageList.filter((d) => d.village_id == this.selectedVillage)[0].village_name;

  //   return {
  //     fname: this.fname,
  //     lname: this.lname,
  //     email: this.email,
  //     number: this.number,
  //     salary: this.salary,
  //     dob: this.dob,
  //     course: this.course,
  //     district_id: this.selectedDistrict,
  //     block_id: this.selectedBlock,

  //     village_id: this.selectedVillage,


  //     selectedDistName: selectedDistName,
  //     selectedBlockName: selectedBlockName,
  //     selectedVillageName: selectedVillageName
  //   }
  // }
  ////
  requestData(): {} {
    let selectedDistName = this.districtList.filter((d) => d.district_id == this.selectedDistrict)[0].district_name;
    let selectedBlockName = this.tempBlockList.filter((d) => d.block_id == this.selectedBlock)[0].block_name;
    let selectedVillageName = this.tempVillageList.filter((d) => d.village_id == this.selectedVillage)[0].village_name;

    return {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      number: this.number,
      salary: this.salary,
      dob: this.dob,
      course: this.course,
      district_id: this.selectedDistrict,
      block_id: this.selectedBlock,

      village_id: this.selectedVillage,


      selectedDistName: selectedDistName,
      selectedBlockName: selectedBlockName,
      selectedVillageName: selectedVillageName
    }
  }
}
