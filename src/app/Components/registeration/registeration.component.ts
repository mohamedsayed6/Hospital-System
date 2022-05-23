import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent implements OnInit {


User:IUser={

      id:0,
      name:"",
      password:"",
      appointments:[],
      email:""
}

Users:IUser[]=[]


  constructor(private formBuilder: FormBuilder,
             private router:Router)
      {}

  userForm = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(8)]]

  });

  ngOnInit(): void {}



  Register() {}

  addUser(user:any){

   this.User=user as IUser
   this.User.appointments=[]

   if(localStorage.getItem("Patients"))
   {

      this.Users=JSON.parse(localStorage.getItem("Patients")!);
      if(this.Users.find(u=>u.email==this.User.email))
      {
        alert("This Email Is Alerady Exist");
        return;
      }

      let lastId:number= this.Users[this.Users.length-1].id
      this.User.id=lastId+1

      this.Users.push(this.User)
      localStorage.setItem("Patients",JSON.stringify(this.Users))


   }
   else
   {
    this.User.id=100
     this.Users.push(this.User)
     localStorage.setItem("Patients",JSON.stringify(this.Users))
   }
    console.log(this.User)
     this.router.navigateByUrl('/Login');

  }
}
