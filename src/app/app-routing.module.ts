import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';

const routes: Routes = [

{path:"",component:HomeComponent,pathMatch:"full"},
{path:"Registeration",component:RegisterationComponent,pathMatch:"full"},
{path:"Login",component:LoginComponent,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
