import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {

  private patientID:string=""
  Users:IUser[]=[]
  today: Date;
  constructor(
    private formBuilder:FormBuilder,
    private _activatedRoute: ActivatedRoute
  )
  {
    this.today =new Date();
  }

  appDate?:Date
  date = this.formBuilder.group({
    appointment: ['',[Validators.required]],
    })

  ngOnInit(): void {


    this._activatedRoute.paramMap.subscribe((params) => {
      this.patientID = params.get('pid')!;
           })

  }

  addAppointment()
  {

    this.Users=JSON.parse(localStorage.getItem("Patients")!);
    this.Users.find(u=>u.id==Number(`${this.patientID}`))?.appointments.push(this.today);
    console.log(this.today)
    localStorage.setItem("Patients",JSON.stringify(this.Users));

  }

}
