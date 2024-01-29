// import { Component, OnInit } from '@angular/core';
// import { Patient} from 'src/app/models/patient.model';
// import { PatientService } from 'src/app/services/patient.service';

// @Component({
//   selector: 'app-add-patient',
//   templateUrl: './add-patient.component.html',
//   styleUrls: ['./add-patient.component.css']
// })
// export class AddPatientComponent implements OnInit {
  
//   patient: Patient = {
//     nom: '',
//     prenom: '',
//     dateNaissance:'',
//     sexe:'',
//     adresse:'',
//     numeroTelephone:'',
//     deleted: false
//   };
//   submitted = false;

//   constructor(private patientService: PatientService) { }

//   ngOnInit(): void {
//   }

//   savePatient(): void {
//     const data = {
//       nom: this.patient.nom,
//       prenom: this.patient.prenom,
//       dateNaissance: this.patient.dateNaissance,
//       sexe: this.patient.sexe,
//       adresse:this.patient.adresse,
//       numeroTelephone: this.patient.numeroTelephone

//     };

//     this.patientService.create(data)
//       .subscribe({
//         next: (res) => {
//           console.log(res);
//           this.submitted = true;
//         },
//         error: (e) => console.error(e)
//       });
//   }

//   newPatient(): void {
//     this.submitted = false;
//     this.patient = {
//       nom: '',
//       prenom: '',
//       dateNaissance:'',
//       sexe:'',
//       adresse:'',
//       numeroTelephone:'',
//       deleted: false
//     };
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    sexe: '',
    adresse: '',
    numeroTelephone: '',
    deleted: false
  };
  submitted = false;
  errorMessage = '';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  savePatient(): void {
    if (this.validateForm()) {
      this.patientService.create(this.patient)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => {
            console.error(e);
            this.errorMessage = 'Failed to save patient. Please try again later.';
          }
        });
    }
  }

  validateForm(): boolean {
    // You can add more validation logic here
    if (!this.patient.nom || !this.patient.prenom || !this.patient.dateNaissance || !this.patient.sexe || !this.patient.adresse || !this.patient.numeroTelephone) {
      this.errorMessage = 'All fields are required.';
      return false;
    }
    return true;
  }

  newPatient(): void {
    this.submitted = false;
    this.patient = {
      nom: '',
      prenom: '',
      dateNaissance: '',
      sexe: '',
      adresse: '',
      numeroTelephone: '',
      deleted: false
    };
  }

}




