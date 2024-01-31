import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../../../service/material.service";
import {resolveGlobalStyles} from "@angular-devkit/build-angular/src/webpack/configs";

@Component({
  selector: 'app-afficher-material',
  templateUrl: './afficher-material.component.html',
  styleUrls: ['./afficher-material.component.css']
})
export class AfficherMaterialComponent implements OnInit {
  materials = [];

  constructor(private serviceMaterial : MaterialService) { }

  ngOnInit(): void {
    this.getMaterials();
  }
  getMaterials(){
    this.serviceMaterial.getMaterials().subscribe((res)=>{
      console.log(res);
      this.materials = res;
    })
  }

  deleteMaterial(id : number){
    this.serviceMaterial.deleteMaterial(id).subscribe((res) =>{
      console.log(res);
      this.getMaterials();
    })
  }
}
