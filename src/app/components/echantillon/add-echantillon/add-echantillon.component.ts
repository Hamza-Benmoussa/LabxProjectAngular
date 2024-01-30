import { Component, OnInit } from '@angular/core';
import { EchantillonService } from "../../../service/echantillon.service";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { Echantillon } from "../../../entity/echantillon";
import {Patient} from "../../../entity/Patient";
import {MaterialEchan} from "../../../entity/MaterialEchan";

@Component({
  selector: 'app-add-echantillon',
  templateUrl: './add-echantillon.component.html',
  styleUrls: ['./add-echantillon.component.css']
})
export class AddEchantillonComponent implements OnInit {

  patients : Patient[]=[];
  materials : MaterialEchan[] =[];
  echantillon : Echantillon ;
  ngOnInit(): void {
  this.loadPatients() ;
  this.loadMaterial() ;
  }
  constructor(private service : EchantillonService) {
  }
loadPatients() : void {
    this.service.getPatients().subscribe(patients => this.patients = patients)
}
  loadMaterial() : void {
    this.service.getMaterials().subscribe(materials => this.materials = materials)
  }
addEchantillon(addEchantillon : NgForm){
    this.service.saveEchantillon(addEchantillon) ;
}

  protected readonly onsubmit = onsubmit;
}
