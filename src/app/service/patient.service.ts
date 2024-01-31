import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from "../entity/Patient";

const baseUrl = 'http://localhost:8080/api/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }

  getAllPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }
  getPatientById(id: any): Observable<Patient> {
    return this.http.get<Patient>(`${baseUrl}/${id}`);
  }

  savePatient(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updatePatient(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }


  deletePatient(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
