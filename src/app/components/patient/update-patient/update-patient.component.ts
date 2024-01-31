// Importez OnInit et le FormGroup de @angular/forms
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importez ces modules

import { Patient } from "../../../entity/Patient";
import { PatientService } from "../../../service/patient.service";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  updatePatientForm: FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(
    private activeRoute : ActivatedRoute,
    private patientService: PatientService,
    private router: Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.updatePatientForm = this.fb.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      sexe: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      numeroTelephone: [null, [Validators.required]]
    });
    this.getPatientById();

  }

  getPatientById() {
    this.patientService.getPatientById(this.id).subscribe((res =>{
      this.updatePatientForm.patchValue(res);
    }))
  }

  updatePatient(): void {
    this.patientService.updatePatient(this.id,this.updatePatientForm.value).subscribe((res) => {
      if (res.id != null){
        this.router.navigateByUrl("/patient")
      }
    })
  }
}
