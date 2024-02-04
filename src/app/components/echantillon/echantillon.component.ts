import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../service/echantillon.service";
import {Router} from "@angular/router";
import {EchantillonRequest} from "../../entity/EchantillonRequest";
import {Echantillon} from "../../entity/Echantillon";

@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.css']
})
export class EchantillonComponent implements OnInit {
 echantillons =[] ;
  constructor(private service : EchantillonService) { }

  ngOnInit(): void {
   this.loadEchantillon();
  }

  loadEchantillon() : void{
     this.service.getEchantillon().subscribe((res)=>{
       this.echantillons=res;     }) ;
  }
  deleteEchantillon(id:number){
    this.service.deleteEchantillon(id).subscribe((res)=>{
      this.loadEchantillon();
    })
  }

}
