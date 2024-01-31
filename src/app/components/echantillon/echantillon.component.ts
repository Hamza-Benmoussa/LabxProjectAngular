import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../service/echantillon.service";
import {Router} from "@angular/router";
import {EchantillonRequest} from "../../entity/EchantillonRequest";

@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.css']
})
export class EchantillonComponent implements OnInit {
 echantillons : EchantillonRequest[] =[] ;
  constructor(private service : EchantillonService , private router : Router) { }

  ngOnInit(): void {
   this.loadEchantillon();
  }

  loadEchantillon() : void{
     this.service.getEchantillon().subscribe(echantillons => this.echantillons =echantillons) ;
  }

}
