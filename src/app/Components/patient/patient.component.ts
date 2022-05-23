import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  User?: IUser;
  Users: IUser[] = [];
  patientID: string = '';

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.patientID = params.get('pid')!;
    });

    this.Users = JSON.parse(localStorage.getItem('Patients')!);
    this.User = this.Users.find((u) => u.id == Number(`${this.patientID}`));

  }
  Delete(date: Date) {
    if (new Date(date).toDateString() == new Date().toDateString()) {
      alert('Sorry you are not aloowed to cancel this appointment ');
    } else {
      let index: number | undefined = this.Users.find(
        (p) => p.id == Number(`${this.patientID}`)
      )?.appointments.lastIndexOf(date);
      this.Users.find(
        (p) => p.id == Number(`${this.patientID}`)
      )?.appointments.splice(Number(index), 1);
      localStorage.setItem('Patients', JSON.stringify(this.Users));
    }
  }
}
