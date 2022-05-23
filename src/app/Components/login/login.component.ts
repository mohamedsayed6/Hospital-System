import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  userForm = this.formBuilder.group({
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.minLength(8)]],

  });
  ngOnInit(): void {
  }
  Login(user:IUser)
  {



  }
}
