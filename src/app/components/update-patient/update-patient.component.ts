import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  id: any;
  patient: Patient = {};
  submitted = false;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getPatient(this.id);
    });
  }

  getPatient(id: any): void {
    this.patientService.get(id).subscribe(
      (data: Patient) => {
        this.patient = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updatePatient(): void {
    this.patientService.update(this.id, this.patient).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateAnotherPatient(): void {
    this.submitted = false;
    this.patient = {};
  }
}
