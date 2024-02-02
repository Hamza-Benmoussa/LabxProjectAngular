import { Component, OnInit } from '@angular/core';
import { EchantillonService } from "../../../service/echantillon.service";
import { Router } from "@angular/router";

import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {EchantillonMaterial} from "../../../entity/EchantillonMaterial";
import {MaterialEchan} from "../../../entity/MaterialEchan";
import {EchantillonRequest} from "../../../entity/EchantillonRequest";
import {Patient} from "../../../entity/Patient";
import {Utilisateur} from "../../../entity/Utilisateur";
import {PatientService} from "../../../service/patient.service";
import {UtilisateurService} from "../../../service/utilisateur.service";
import {MaterialService} from "../../../service/material.service";

@Component({
  selector: 'app-add-echantillon',
  templateUrl: './add-echantillon.component.html',
  styleUrls: ['./add-echantillon.component.css']
})
export class AddEchantillonComponent implements OnInit {

  materialEchan : MaterialEchan[];
  patients : Patient[];
  utilisateurPreleveur : Utilisateur[];
  echantillonMaterial:EchantillonMaterial[] =[];
  echantillonForm: FormGroup;
  id : number ;
patient: Patient ;


  constructor(
    private formBuilder : FormBuilder,
    private servicePatient : PatientService,
    private serviceUtilisateur : UtilisateurService,
    private serviceEchantMater: MaterialService,
    private service: EchantillonService,
    private router: Router) {}

  ngOnInit(): void {

    this.initForm();
  }

  loadPatients(): void {
    this.servicePatient.getAllPatient().subscribe(patients => this.patients = patients);
  }

  initForm():void{
      this.echantillonForm = this.formBuilder.group({
         nomAnalyse : ['',Validators.required],
        material : ['',Validators.required],
        patient:['',Validators.required],
        utilisateurPreleveur :['',Validators.required],
        datePrelevement : ['',Validators.required],
        quantityMaterial : [1,[Validators.required , Validators.min(1)]],
      });
  }



}
