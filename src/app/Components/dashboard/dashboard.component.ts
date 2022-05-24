import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
Patients:IUser[]=[]
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.Patients=JSON.parse( localStorage.getItem("Patients")!);
  }



  Delete(id:number)
  {
      localStorage.setItem("Patients",JSON.stringify(this.Patients.filter(p=>p.id !=id)))
      location.reload();

  }

  Edit(id:number)
  {
    this.router.navigateByUrl(`/Edit/${id}`)
  }
  Addappointment(id:number)
  {
    this.router.navigateByUrl(`/Addappointment/${id}`)
  }

  Add()
  {
    this.router.navigateByUrl("/Registeration")
  }

}
