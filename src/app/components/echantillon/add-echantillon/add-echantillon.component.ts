import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from "@angular/router";
import { MaterialService } from "../../../service/material.service";
import { Patient } from "../../../entity/Patient";
import { Utilisateur } from "../../../entity/Utilisateur";
import { EchantillonService } from "../../../service/echantillon.service";
import { PatientService } from "../../../service/patient.service";
import { UtilisateurService } from "../../../service/utilisateur.service";
import { MaterialEchan } from "../../../entity/MaterialEchan";
import { EchantillonRequest } from "../../../entity/EchantillonRequest";
import { EchantillonMaterial } from "../../../entity/EchantillonMaterial";

@Component({
  selector: 'app-add-echantillon',
  templateUrl: './add-echantillon.component.html',
  styleUrls: ['./add-echantillon.component.css']
})
export class AddEchantillonComponent implements OnInit {
  echantillonForm: FormGroup;
  patients: Patient[] = [];
  selectedPatient: Patient;
  utilisateurs: Utilisateur[] = [];
  selectedUtilisateur: Utilisateur;
  materials: MaterialEchan[] = [];
  selectedMaterial: MaterialEchan;
  echantillonMaterial: EchantillonMaterial[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private echantillonService: EchantillonService,
    private router: Router,
    private materialService: MaterialService,
    private patientService: PatientService,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(
      data => {
        this.utilisateurs = data;
      }
    );
    this.patientService.getAllPatient().subscribe(
      data => {
      this.patients = data;
    });
    this.materialService.getMaterials().subscribe(
      data => {
        this.materials = data;
      }
    );
    this.initForm();

    // Subscribe to the value changes of the 'patient' form control
    this.echantillonForm.get('patient').valueChanges.subscribe((selectedPatient) => {
      this.selectedPatient = selectedPatient;
      console.log('Selected Patient:', this.selectedPatient);
    });

    // Subscribe to the value changes of the 'utilisateurPreleveur' form control
    this.echantillonForm.get('utilisateurPreleveur').valueChanges.subscribe((selectedUtilisateur) => {
      this.selectedUtilisateur = selectedUtilisateur;
      console.log('Selected Utilisateur:', this.selectedUtilisateur);
    });
  }

  initForm(): void {
    this.echantillonForm = this.formBuilder.group({
      nomAnalyse: [null, Validators.required],
      patient: [null, Validators.required],
      utilisateurPreleveur: [null, Validators.required],
      datePrelevement: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      material:[null,Validators.required],
      echantillonMaterials: this.formBuilder.array([]),
    });
  }
  onSubmit(): void {
    const formData = this.echantillonForm.value;

    let echantillonRequest: EchantillonRequest;
    echantillonRequest = {
      patient: formData.patient,
      utilisateurPreleveur: formData.utilisateurPreleveur,
      nomAnalyse: formData.nomAnalyse,
      datePrelevement: formData.datePrelevement,
      echantillonMaterials: formData.echantillonMaterials
    };

    this.echantillonService.saveEchantillon(echantillonRequest).subscribe(
      (response) => {
        console.log("Donnees des echantillons envoyées avec succès", response);
        this.router.navigate(['/echantillon']);
      },
      (error) => {
        console.error('Erreur lors de l\'envoi des données au backend', error);
        // Handle error as needed
      });
  }

  addMaterial(): void {
    const materialObject = this.echantillonForm.get('material')?.value;
    const quantity = this.echantillonForm.get('quantity')?.value;

    if (!materialObject || !quantity) {
      return;
    }

    // Create a new FormGroup for the material
    const newMaterial = this.formBuilder.group({
      materielEchan: this.formBuilder.group({
        id: materialObject.id,
        nomechan: materialObject.nomechan,
        quantiteStockEhcna: materialObject.quantiteStockEhcna,
        dateExpirationEchan: materialObject.dateExpirationEchan,
        fournisseurNom: materialObject.fournisseurNom,
      }),
      quantity: quantity,
    });

    // Access the echantillonMaterials FormArray and push the new material
    const echantillonMaterialsArray = this.echantillonForm.get('echantillonMaterials') as FormArray;
    echantillonMaterialsArray.push(newMaterial);

    // Clear values after adding material to the form array
    this.echantillonForm.get('material')?.reset();
    this.echantillonForm.get('quantity')?.reset();
  }



}
