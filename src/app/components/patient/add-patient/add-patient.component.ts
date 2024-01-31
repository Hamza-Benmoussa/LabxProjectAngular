
import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../../../service/material.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientService} from "../../../service/patient.service";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  savePatientForm : FormGroup;
  constructor(private patientService : PatientService , private fb:FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.savePatientForm = this.fb.group({
      nom: [null ,[Validators.required]],
      prenom: [null ,[Validators.required]],
      dateNaissance: [null ,[Validators.required]],
      sexe: [null ,[Validators.required]],
      adresse: [null ,[Validators.required]],
      numeroTelephone: [null ,[Validators.required]]
    })
  }
  savePatient(){
    console.log(this.savePatientForm.value);
    this.patientService.savePatient(this.savePatientForm.value).subscribe((res) =>{
      console.log(res);
      this.router.navigateByUrl("/patient")
    })
  }

}
