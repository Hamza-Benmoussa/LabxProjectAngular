import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Norme} from "../entity/Norme";
import {MaterialEchan} from "../entity/MaterialEchan";

const baseUrl = "http://localhost:8080/api/normes"
@Injectable({
  providedIn: 'root'
})
export class NormeService {

  constructor(private http:HttpClient) { }

  saveNorme(norme:any) : Observable<any>{
    return this.http.post(baseUrl,norme);
  }

  getNormes():Observable<Norme[]> {
    return this.http.get<Norme[]>(baseUrl);
  }

  getNormeById(id :number):Observable<Norme>{
    return this.http.get<Norme>(`${baseUrl}/${id}`);
  }
  updateNorme(id : number , norme : Norme):Observable<Norme>{
    return this.http.put<Norme>(`${baseUrl}/${id}`,norme);
  }

  deleteNorme(id:number) :Observable<Norme>{
    return this.http.delete<Norme>(`${baseUrl}/${id}`);
  }

}
