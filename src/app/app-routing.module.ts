import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddappointmentComponent } from './Components/addappointment/addappointment.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditComponent } from './Components/edit/edit.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PatientComponent } from './Components/patient/patient.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';

const routes: Routes = [

{path:"",component:HomeComponent,pathMatch:"full"},
{path:"Registeration",component:RegisterationComponent,pathMatch:"full"},
{path:"Login",component:LoginComponent,pathMatch:"full"},
{path:"Dashboard",component:DashboardComponent,pathMatch:"full"},
{path:"Addappointment/:pid",component:AddappointmentComponent,pathMatch:"full"},
{path:"Patient/:pid",component:PatientComponent,pathMatch:"full"},
{path:"Edit/:pid",component:EditComponent,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
