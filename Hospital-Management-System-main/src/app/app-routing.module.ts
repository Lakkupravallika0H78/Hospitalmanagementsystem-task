import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path: 'signup', component: SignupComponent},
  {path : 'dashboard', children :
  [
    
    {path : 'patient', component: PatientComponent},
    {path : 'doctor', component: DoctorComponent},
    {path : 'doctor/:id', component: ViewDoctorComponent},
    {path : 'patient/:id', component: ViewPatientComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
