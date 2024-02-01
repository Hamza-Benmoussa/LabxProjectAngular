import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeAnalyse} from "../entity/TypeAnalyse";

const baseUrl = "http://localhost:8080/api/typeanalyse"
@Injectable({
  providedIn: 'root'
})
export class TypeanalyseService {

  constructor(private http: HttpClient) { }

  saveTypeAnalyse(typeAnalyse : any) : Observable<any>{
    return this.http.post(baseUrl,typeAnalyse);
  }
  getTypeAnalyse() : Observable<TypeAnalyse[]>{
    return this.http.get<TypeAnalyse[]>(baseUrl);
  }
  getTypeById(id :number) : Observable<TypeAnalyse>{
    return this.http.get<TypeAnalyse>(`${baseUrl}/${id}`);
  }
  updateTypeAnalyse(id : number , typeAnalyse : TypeAnalyse) :Observable<TypeAnalyse>{
    return this.http.put<TypeAnalyse>(`${baseUrl}/${id}` ,typeAnalyse);
  }
  deleteTypeAnalyse(id : number) :Observable<TypeAnalyse>{
    return this.http.delete<TypeAnalyse>(`${baseUrl}/${id}`);
  }
}
