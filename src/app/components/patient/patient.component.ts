import { Component, OnInit } from '@angular/core';
import {resolveGlobalStyles} from "@angular-devkit/build-angular/src/webpack/configs";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients = [];

  constructor(private servicePatient : PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(){
    this.servicePatient.getAllPatient().subscribe((res)=>{
      console.log(res);
      this.patients = res;
    })
  }

  deletePatient(id : number){
    this.servicePatient.deletePatient(id).subscribe((res) =>{
      console.log(res);
      this.getPatients();
    })
  }
}
