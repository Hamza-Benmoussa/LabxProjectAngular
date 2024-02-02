import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';
import { Patient } from '../entity/Patient';

const baseUrl = "http://localhost:8080/api/patients";

describe('PatientService', () => {
  let service: PatientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a patient', () => {
    const patient: Patient = {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      dateNaissance: '1990-01-01',
      sexe: 'Male',
      adresse: '123 Street',
      numeroTelephone: '1234567890'
    };

    const mockResponseData = { id: 123, message: 'Patient created successfully' };

    service.savePatient(patient).subscribe(response => {
      expect(response).toEqual(mockResponseData);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponseData);
  });

  it('should get patients', () => {
    const mockPatients: Patient[] = [
      {
        id: 1,
        nom: 'John',
        prenom: 'Doe',
        dateNaissance: '1990-01-01',
        sexe: 'Male',
        adresse: '123 Street',
        numeroTelephone: '1234567890'
      },
      // Add more mock patients as needed
    ];

    service.getAllPatient().subscribe(patients => {
      expect(patients).toEqual(mockPatients);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPatients);
  });

  it('should get a patient by id', () => {
    const mockPatient: Patient = {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      dateNaissance: '1990-01-01',
      sexe: 'Male',
      adresse: '123 Street',
      numeroTelephone: '1234567890'
    };

    service.getPatientById(mockPatient.id).subscribe(patient => {
      expect(patient).toEqual(mockPatient);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockPatient.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPatient);
  });

  it('should update a patient', () => {
    const mockPatient: Patient = {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      dateNaissance: '1990-01-01',
      sexe: 'Male',
      adresse: '123 Street',
      numeroTelephone: '1234567890'
    };

    service.updatePatient(mockPatient.id, mockPatient).subscribe(updatedPatient => {
      expect(updatedPatient).toEqual(mockPatient);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockPatient.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockPatient);
  });

  it('should delete a patient', () => {
    const mockPatient: Patient = {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      dateNaissance: '1990-01-01',
      sexe: 'Male',
      adresse: '123 Street',
      numeroTelephone: '1234567890'
    };

    service.deletePatient(mockPatient.id).subscribe(deletedPatient => {
      expect(deletedPatient).toEqual(mockPatient);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockPatient.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockPatient);
  });
});
