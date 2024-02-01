import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MaterialEchan} from "../entity/MaterialEchan";
import {Reactif} from "../entity/Reactif";

const baseUrl="http://localhost:8080/api/reactifs";

@Injectable({
  providedIn: 'root'
})
export class ReactifService {

  constructor(private http:HttpClient) { }
  saveReactif(reactif:any) :Observable<any>{
    return this.http.post(baseUrl,reactif);
  }
  getReactifs(): Observable<Reactif[]> {
    return this.http.get<Reactif[]>(baseUrl);
  }

  getReactifById(id :number) : Observable<Reactif>{
    return this.http.get<Reactif>(`${baseUrl}/${id}`);
  }
  updateReactif(id : number , reactif : Reactif):Observable<Reactif>{
    return this.http.put<Reactif>(`${baseUrl}/${id}`,reactif);
  }

  deleteReactif(id:number) :Observable<Reactif>{
    return this.http.delete<Reactif>(`${baseUrl}/${id}`);
  }
}
