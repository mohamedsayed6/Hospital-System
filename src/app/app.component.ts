import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   islogged:string=""
  constructor(private translate: TranslateService) {
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


  this.islogged!=localStorage.getItem("isLogged")

}


  change()
  {
    if(localStorage.getItem("lang")=="en")
          localStorage.setItem("lang","ar")
      else
      localStorage.setItem("lang","en")
      location.reload()
  }
}
