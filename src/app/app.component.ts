import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
   islogged!:any
  constructor(private translate: TranslateService,
              private route:Router) {
    if(!localStorage.getItem("lang"))
    {localStorage.setItem("lang","en")}
       this.translate.setDefaultLang(localStorage.getItem("lang")!);

       if(!localStorage.getItem("isLogged"))
       {
        this.islogged="notlogged"
       }
  }

  title = 'Hospital-System';

ngOnInit(): void {

  this.islogged=localStorage.getItem("isLogged")

}


  change()
  {
    if(localStorage.getItem("lang")=="en")
          localStorage.setItem("lang","ar")
      else
      localStorage.setItem("lang","en")
      location.reload()
  }



  Logout()
  {
    //console.log("asd123")
    this.islogged=localStorage.getItem("isLogged")
    this.islogged=""
    localStorage.setItem("isLogged",this.islogged)

  }

  profile()
  {

    let pid=localStorage.getItem("userId");
    this.route.navigateByUrl(`/Patient/${pid}`)
  }

  GoDashboard()
  {
    this.route.navigateByUrl(`/Dashboard`)
  }


  GoLogin()
  {
    this.route.navigateByUrl(`/Login`)
  }
}
