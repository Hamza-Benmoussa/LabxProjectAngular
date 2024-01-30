import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Echantillon} from "../entity/echantillon";
import {Patient} from "../entity/Patient";
import {MaterialEchan} from "../entity/MaterialEchan";
import {NgForm} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class EchantillonService {
  private url = "http://localhost:8080/api"
  private httpClient: any;
  constructor(private http: HttpClient) { }

  saveEchantillon(echantillon: NgForm): Observable<Echantillon> {
    return this.http.post<Echantillon>(`${this.url}/echantillons` , echantillon)

  }

  getEchantillon():Observable<Echantillon[]>{
    return this.http.get<Echantillon[]>(`${this.url}/echantillons`)
  }
  updateEchantillon(id? : number , echantillon? :any) : Observable<any>{
    return this.http.put(`${this.url}/echantillons/${id}` ,echantillon)
  }

  getEchantillonById(id:number) : Observable<Echantillon>{
    return this.http.get<Echantillon>(`${this.url}/echantillons/${id}`)
  }
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.url}/patients`);
  }

  getMaterials(): Observable<MaterialEchan[]> {
    return this.http.get<MaterialEchan[]>(`${this.url}/materials`);
  }

  deleteEchantillon(id : number) :Observable<any>{
    return this.http.delete<Echantillon>(`${this.url}/echantillons/${id}`)
  }
}
