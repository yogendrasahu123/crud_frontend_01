import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCpComponent } from './new-cp/new-cp.component';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendCrudComponent } from './backend-crud/backend-crud.component';
import { FormServiceService } from './services/form-service.service';
import { NewCrudComponent } from './new-crud/new-crud.component';
@NgModule({
  declarations: [
    AppComponent,
    NewCpComponent,
    CrudComponent,
    EmployeeDashboardComponent,
    DashboardComponent,
    LocationComponent,
    BackendCrudComponent,
    NewCrudComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
