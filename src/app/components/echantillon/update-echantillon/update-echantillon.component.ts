// // update-echantillon.component.ts
// import { Component, OnInit } from '@angular/core';
// import { EchantillonService } from "../../../service/echantillon.service";
// import { ActivatedRoute, Router } from "@angular/router";
// import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
// import {MaterialEchan} from "../../../entity/MaterialEchan";
// import {EchantillonMaterial} from "../../../entity/EchantillonMaterial";
// import {Echantillon} from "../../../entity/Echantillon";
// import {MaterialService} from "../../../service/material.service";
//
// @Component({
//   selector: 'app-update-echantillon',
//   templateUrl: './update-echantillon.component.html',
//   styleUrls: ['./update-echantillon.component.css']
// })
// export class UpdateEchantillonComponent implements OnInit {
//   echantillonForm: FormGroup;
//   materials: MaterialEchan[] = [];
//   selectedMaterial: MaterialEchan;
//   echantillonMaterial: EchantillonMaterial[] = [];
//   existineEchantillon !:Echantillon;
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private echantillonService: EchantillonService,
//     private router: Router,
//     private materialService: MaterialService,
//   ) {}
//
//   ngOnInit(): void {
//
//
//     this.materialService.getMaterials().subscribe(
//       data => {
//         this.materials = data;
//       }
//     );
//     this.initForm();
//
//   }
//
//   initForm(): void {
//     this.echantillonForm = this.formBuilder.group({
//       datePrelevement: [null, Validators.required],
//       quantity: [1, [Validators.required, Validators.min(1)]],
//       material:[null,Validators.required],
//       echantillonMaterials: this.formBuilder.array([]),
//     });
//   }
//   updateForm(): void {
//     if (this.existineEchantillon ) {
//       this.echantillonForm.patchValue({
//         datePrelevement: this.existineEchantillon.datePrelevement,
//       });
//       this.echantillonMaterial=this.existineEchantillon.echantillonMaterials
//     }
//   }
//
//   addMaterial(): void {
//     const materialObject = this.echantillonForm.get('material')?.value;
//     const quantity = this.echantillonForm.get('quantity')?.value;
//
//     if (!materialObject || !quantity) {
//       return;
//     }
//
//     // Create a new FormGroup for the material
//     const newMaterial = this.formBuilder.group({
//       materielEchan: this.formBuilder.group({
//         id: materialObject.id,
//         nomechan: materialObject.nomechan,
//         quantiteStockEhcna: materialObject.quantiteStockEhcna,
//         dateExpirationEchan: materialObject.dateExpirationEchan,
//         fournisseurNom: materialObject.fournisseurNom,
//       }),
//       quantity: quantity,
//     });
//
//     // Access the echantillonMaterials FormArray and push the new material
//     const echantillonMaterialsArray = this.echantillonForm.get('echantillonMaterials') as FormArray;
//     echantillonMaterialsArray.push(newMaterial);
//
//     // Clear values after adding material to the form array
//     this.echantillonForm.get('material')?.reset();
//     this.echantillonForm.get('quantity')?.reset();
//   }
//
//
//
// }
