import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  Users:IUser[]=[]
  private patientID:string=""


  constructor(private formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private route:Router) { }

  userForm = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.minLength(6)]]})

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((params) => {
      this.patientID = params.get('pid')!;
           })

  }

  Update(usr:IUser)
  {

    this.Users=JSON.parse(localStorage.getItem("Patients")!)
    this.Users.find(u=>u.id==Number(`${this.patientID}`))!.name=usr.name;
    this.Users.find(u=>u.id==Number(`${this.patientID}`))!.email=usr.email;
    this.Users.find(u=>u.id==Number(`${this.patientID}`))!.password=usr.password;

    localStorage.setItem("Patients",JSON.stringify(this.Users));
    this.route.navigateByUrl("/Dashboard")

  }

}
