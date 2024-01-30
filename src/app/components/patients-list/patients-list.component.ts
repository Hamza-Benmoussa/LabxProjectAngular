import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[] = [];
  currentIndex = -1;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.retrievePatients();
  }

  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe(
        (data: Patient[]) => {
          this.patients = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  deletePatient(id: any): void {
    this.patientService.delete(id)
      .subscribe(
        () => {
          this.retrievePatients();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  editPatient(index: number): void {
    // pass the id and after that should be get the info of the patient and redirect him to updatePatient components
    // You can navigate to an edit page with patient ID or implement inline editing
    console.log('Editing patient:', this.patients[index]);
  }

  updatePatient(patient: Patient): void {
    // Assuming you have an update method in your service
    this.patientService.update(patient.id, patient)
      .subscribe(
        () => {
          console.log('Patient updated successfully');
        },
        (error) => {
          console.error('Error updating patient:', error);
        }
      );
  }

  goToAddPatient(): void {
    // Navigate to the add patient page
    console.log('Navigating to add patient page');
  }
}
