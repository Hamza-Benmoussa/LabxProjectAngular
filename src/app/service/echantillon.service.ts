import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Echantillon } from "../entity/Echantillon";
import { Patient } from "../entity/Patient";
import { MaterialEchan } from "../entity/MaterialEchan";
import {Utilisateur} from "../entity/Utilisateur";
import {EchantillonRequest} from "../entity/EchantillonRequest";

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {
  private url = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  saveEchantillon(echantillon: EchantillonRequest): Observable<EchantillonRequest> {
    console.log(echantillon);
    return this.http.post<EchantillonRequest>(`${this.url}/echantillons`, echantillon);
  }

  getPatientById(id :number):Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/patients/${id}`)
  }
  getEchantillon(): Observable<EchantillonRequest[]> {
    return this.http.get<EchantillonRequest[]>(`${this.url}/echantillons`);
  }

  getUtilisateurPreleveur() :Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.url}/utilisateurs`)
  }

  updateEchantillon(id?: number, echantillon?: any): Observable<any> {
    return this.http.put(`${this.url}/echantillons/${id}`, echantillon);
  }

  getEchantillonById(id: number): Observable<Echantillon[]> {
    return this.http.get<Echantillon[]>(`${this.url}/echantillons/${id}`);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.url}/patients`);
  }

  getMaterials(): Observable<MaterialEchan[]> {
    return this.http.get<MaterialEchan[]>(`${this.url}/materials`);
  }

  deleteEchantillon(id: number): Observable<any> {
    return this.http.delete<Echantillon>(`${this.url}/echantillons/${id}`);
  }
}
