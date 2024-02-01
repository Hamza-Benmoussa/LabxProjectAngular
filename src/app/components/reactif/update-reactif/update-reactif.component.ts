import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialService} from "../../../service/material.service";
import {ReactifService} from "../../../service/reactif.service";

@Component({
  selector: 'app-update-reactif',
  templateUrl: './update-reactif.component.html',
  styleUrls: ['./update-reactif.component.css']
})
export class UpdateReactifComponent implements OnInit {

  updateReactifForm : FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(private activeRoute : ActivatedRoute ,
              private serviceReactif : ReactifService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.updateReactifForm = this.fb.group({
      nom:[null,[Validators.required]],
      description:[null,[Validators.required]],
      quantiteStock:[null,[Validators.required]],
      dateExpiration:[null,[Validators.required]],
      fournisseurNom:[null,[Validators.required]]
    });
    this.getReactifById();
  }

  getReactifById(){
    this.serviceReactif.getReactifById(this.id).subscribe((res) =>{
      console.log(res);
      this.updateReactifForm.patchValue(res);
    })
  }

  updateReactif(){
    this.serviceReactif.updateReactif(this.id,this.updateReactifForm.value).subscribe((res) =>{
      console.log(res);
      if (res.id != null){
        this.router.navigateByUrl("/afficher-reactif");
      }
    })
  }

}
