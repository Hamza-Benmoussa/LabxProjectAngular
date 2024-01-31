import { Component, OnInit } from '@angular/core';
import { EchantillonService } from "../../../service/echantillon.service";
import { Router } from "@angular/router";

import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {EchantillonMaterial} from "../../../entity/EchantillonMaterial";
import {MaterialEchan} from "../../../entity/MaterialEchan";
import {EchantillonRequest} from "../../../entity/EchantillonRequest";
import {Patient} from "../../../entity/Patient";
import {Utilisateur} from "../../../entity/Utilisateur";

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
    private service: EchantillonService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadPatients();
    this.loadMaterial();
    this.loadUtilisateur();
    this.initForm();
  }

  loadPatients(): void {
    this.service.getPatients().subscribe(patients => this.patients = patients);
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
  loadUtilisateur():void{
    this.service.getUtilisateurPreleveur().subscribe(utilisateurPreleveur =>this.utilisateurPreleveur = utilisateurPreleveur)
  }

  loadMaterial(): void {
    this.service.getMaterials().subscribe(materials => this.materialEchan = materials);
  }
  loadPatientById():void{
    this.service.getPatientById(this.id).subscribe(patient =>this.patient= patient)
  }
  // ...

  onSubmit(): void {
    const echantillonData = this.echantillonForm.value;

    // Créez une liste d'EchantillonMaterial à partir des données du formulaire
    const echantillonMaterials: EchantillonMaterial[] = [{
      echantillon: echantillonData.echantillon ,// Assurez-vous que cette propriété est correctement définie
      materielEchan: echantillonData.material,
      quantity: echantillonData.quantityMaterial
    }];

    // Créez l'objet EchantillonRequest
    const echantillonRequest: EchantillonRequest = {
      datePrelevement: echantillonData.datePrelevement,
      echantillonMaterials: echantillonData.echantillonMaterials,
      id: null,
      nomAnalyse: echantillonData.nomAnalyse,
      patient: echantillonData.patient,
      utilisateurPreleveur: echantillonData.utilisateurPreleveur
    };

    this.service.saveEchantillon(echantillonRequest).subscribe(() => this.router.navigate(['/echantillons']));
  }

}
