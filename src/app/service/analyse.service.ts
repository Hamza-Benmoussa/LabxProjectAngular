import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MaterialEchan} from "../entity/MaterialEchan";
import {Analyse} from "../entity/Analyse";

const baseUrl="http://localhost:8080/api/analyses"
@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http : HttpClient) { }

  saveAnalyse(analyse:any) :Observable<any>{
    return this.http.post(baseUrl,analyse);
  }
  getAnalyses(): Observable<Analyse[]> {
    return this.http.get<Analyse[]>(baseUrl);
  }

  getAnalyseById(id :number) : Observable<Analyse>{
    return this.http.get<Analyse>(`${baseUrl}/${id}`);
  }
  updateAnalyse(id : number , analyse : Analyse):Observable<Analyse>{
    return this.http.put<Analyse>(`${baseUrl}/${id}`,analyse);
  }

  deleteAnalyse(id:number) :Observable<Analyse>{
    return this.http.delete<Analyse>(`${baseUrl}/${id}`);
  }


}
