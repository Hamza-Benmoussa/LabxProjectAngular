import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialService} from "../../../service/material.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {

  updateMaterialForm : FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(private activeRoute : ActivatedRoute ,
              private serviceMaterial : MaterialService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.updateMaterialForm = this.fb.group({
      nomechan: [null ,[Validators.required]],
      quantiteStockEhcna: [null ,[Validators.required]],
      dateExpirationEchan: [null ,[Validators.required]],
      fournisseurNom: [null ,[Validators.required]]
    });
    this.getMaterialById();
  }

  getMaterialById(){
    this.serviceMaterial.getMaterialById(this.id).subscribe((res) =>{
      console.log(res);
      this.updateMaterialForm.patchValue(res);
    })
  }

  updateMaterial(){
    this.serviceMaterial.updateMaterial(this.id,this.updateMaterialForm.value).subscribe((res) =>{
      console.log(res);
      if (res.id != null){
        this.router.navigateByUrl("/afficher-material");
      }
    })
  }
}
