import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialService} from "../../../service/material.service";
import {NormeService} from "../../../service/norme.service";

@Component({
  selector: 'app-update-norme',
  templateUrl: './update-norme.component.html',
  styleUrls: ['./update-norme.component.css']
})
export class UpdateNormeComponent implements OnInit {

  updateNormeForm:FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(private activeRoute : ActivatedRoute ,
              private serviceNorme : NormeService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.updateNormeForm = this.fb.group({
      description: [null ,[Validators.required]],
      min: [null ,[Validators.required]],
      max: [null ,[Validators.required]],
      unite: [null ,[Validators.required]]
    })
    this.getNormeById();
  }

  getNormeById(){
    this.serviceNorme.getNormeById(this.id).subscribe((res) =>{
      console.log(res);
      this.updateNormeForm.patchValue(res);
    })
  }

  updateNorme(){
    this.serviceNorme.updateNorme(this.id,this.updateNormeForm.value).subscribe((res) =>{
      console.log(res);
      if (res.id != null){
        this.router.navigateByUrl("/afficher-norme");
      }
    })
  }
}
