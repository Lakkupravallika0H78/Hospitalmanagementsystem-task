import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDoctorComponent } from './component/dashboard/doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { AddPatientComponent } from './component/dashboard/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './component/dashboard/patient/delete-patient/delete-patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    ViewDoctorComponent,
    AddPatientComponent,
    DeletePatientComponent,
    ViewPatientComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   
})
export class AppModule { }
