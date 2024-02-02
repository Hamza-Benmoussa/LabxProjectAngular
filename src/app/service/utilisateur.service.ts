import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../entity/Utilisateur";

const baseUrl ="http://localhost:8080/api/utilisateurs"
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  saveUtilisateur(utilisateur:any) : Observable<any> {
    return this.http.post(baseUrl,utilisateur);
  }
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(baseUrl);
  }

  getUtilisateurById(id :number) : Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${baseUrl}/${id}`);
  }
  updateUtilisateur(id : number , utilisateur : Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(`${baseUrl}/${id}`,utilisateur);
  }

  deleteUtilisateur(id:number) :Observable<Utilisateur>{
    return this.http.delete<Utilisateur>(`${baseUrl}/${id}`);
  }
}
