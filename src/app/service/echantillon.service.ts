import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EchantillonRequest } from "../entity/EchantillonRequest";
import {Echantillon} from "../entity/Echantillon";

const baseUrl="http://localhost:8080/api/echantillons";
@Injectable({
  providedIn: 'root'
})
export class EchantillonService {

  constructor(private http: HttpClient) { }

  saveEchantillon(echantillonRequest: EchantillonRequest): Observable<EchantillonRequest> {
    console.log(echantillonRequest);
    return this.http.post<EchantillonRequest>(baseUrl, echantillonRequest);
  }


  getEchantillon(): Observable<Echantillon[]> {
    return this.http.get<Echantillon[]>(baseUrl);
  }

  updateEchantillon(id: number, echantillon : EchantillonRequest): Observable<EchantillonRequest> {
    return this.http.put<EchantillonRequest>(`${baseUrl}/${id}`, echantillon);
  }

  getEchantillonById(id: number): Observable<Echantillon> {
    return this.http.get<Echantillon>(`${baseUrl}/${id}`);
  }


  deleteEchantillon(id: number): Observable<any> {
    return this.http.delete<EchantillonRequest>(`${baseUrl}/${id}`);
  }
}
