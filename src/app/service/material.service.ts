import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../entity/Patient";
import {MaterialEchan} from "../entity/MaterialEchan";

const baseUrl="http://localhost:8080/api/materials";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http : HttpClient) { }

  saveMaterial(material:any) :Observable<any>{
    return this.http.post(baseUrl,material);
  }
  getMaterials(): Observable<MaterialEchan[]> {
    return this.http.get<MaterialEchan[]>(baseUrl);
  }

  getMaterialById(id :number) : Observable<MaterialEchan>{
    return this.http.get<MaterialEchan>(`${baseUrl}/${id}`);
  }
  updateMaterial(id : number , material : MaterialEchan):Observable<MaterialEchan>{
    return this.http.put<MaterialEchan>(`${baseUrl}/${id}`,material);
  }

  deleteMaterial(id:number) :Observable<MaterialEchan>{
    return this.http.delete<MaterialEchan>(`${baseUrl}/${id}`);
  }
}
