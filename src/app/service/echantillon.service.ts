import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EchantillonRequest } from "../entity/EchantillonRequest";
import { Patient } from "../entity/Patient";
import { MaterialEchan } from "../entity/MaterialEchan";
import {Utilisateur} from "../entity/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {
  private url = "http://localhost:8080/api/echantillons";

  constructor(private http: HttpClient) { }

  saveEchantillon(echantillon: EchantillonRequest): Observable<EchantillonRequest> {
    console.log(echantillon);
    return this.http.post<EchantillonRequest>(`${this.url}`, echantillon);
  }


  getEchantillon(): Observable<EchantillonRequest[]> {
    return this.http.get<EchantillonRequest[]>(`${this.url}`);
  }

  updateEchantillon(id?: number, echantillon?: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, echantillon);
  }

  getEchantillonById(id: number): Observable<EchantillonRequest[]> {
    return this.http.get<EchantillonRequest[]>(`${this.url}/${id}`);
  }


  deleteEchantillon(id: number): Observable<any> {
    return this.http.delete<EchantillonRequest>(`${this.url}/${id}`);
  }
}
