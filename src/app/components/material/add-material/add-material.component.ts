import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../../../service/material.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  saveMaterialForm : FormGroup;
  constructor(private materialService : MaterialService , private fb:FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.saveMaterialForm = this.fb.group({
      nomechan: [null ,[Validators.required]],
      quantiteStockEhcna: [null ,[Validators.required]],
      dateExpirationEchan: [null ,[Validators.required]],
      fournisseurNom: [null ,[Validators.required]]
    })
  }
  saveMaterial(){
    console.log(this.saveMaterialForm.value);
    this.materialService.saveMaterial(this.saveMaterialForm.value).subscribe((res) =>{
      console.log(res);
      this.router.navigateByUrl("/afficher-material")
    })
  }

}
