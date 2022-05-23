import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  Users:IUser[]=[]


  constructor(private formBuilder: FormBuilder,
    private router:Router) {}
  userForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  ngOnInit(): void {}
  Login(user: IUser) {
    if (localStorage.getItem('Patients')) {
      this.Users=JSON.parse(localStorage.getItem("Patients")!);

      if(this.Users.find(u=>u.email==user.email))
         {
           if(this.Users.find(u=>u.password==user.password))
           {
            this.router.navigateByUrl(`/Patient/${this.Users.find(u=>u.email==user.email)?.id}`)
           }
           else
           {
             alert("Password Is Incorrect")
             return;
           }
         }

         else
         {
           alert("Account Not Found")
           return;
         }


    }
  }
}
