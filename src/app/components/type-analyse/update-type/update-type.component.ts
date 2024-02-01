import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TypeanalyseService} from "../../../service/typeanalyse.service";

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {

  updateTypeAnalyseForm : FormGroup;
  id : number =this.activeRoute.snapshot.params["id"];
  constructor(private activeRoute:ActivatedRoute,
              private serviceTypeAnalyse : TypeanalyseService,
              private fb:FormBuilder,
              private router :Router) { }

  ngOnInit(): void {
    this.updateTypeAnalyseForm = this.fb.group({
      nom:[null,Validators.required]
    });
    this.getTypeAnalyseById();
  }

  getTypeAnalyseById(){
    this.serviceTypeAnalyse.getTypeById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateTypeAnalyseForm.patchValue(res);
    })
  }

  updateTypeAnalyse(){
   this.serviceTypeAnalyse.updateTypeAnalyse(this.id ,this.updateTypeAnalyseForm.value).subscribe((res) =>{
     console.log(res);
     if (res.id != null) {
       this.router.navigateByUrl("type-analyse")
     }
     })
  }
  }
