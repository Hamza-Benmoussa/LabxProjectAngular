import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeanalyseService} from "../../../service/typeanalyse.service";
import {Router} from "@angular/router";
import {AnalyseService} from "../../../service/analyse.service";
import {TypeAnalyse} from "../../../entity/TypeAnalyse";
import {Analyse} from "../../../entity/Analyse";

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  typeAnalyse:TypeAnalyse;

  saveTypeAnalyseForm :FormGroup;
  constructor(private typeAnalyseSerrvice : TypeanalyseService, private fb:FormBuilder , private route :Router) { }

  ngOnInit(): void {
    this.saveTypeAnalyseForm = this.fb.group({
      nom:[null , [Validators.required]],
      analyse:[null ,[Validators.required]]
    })
  }

  saveTypeAnalyse(){
    this.typeAnalyseSerrvice.saveTypeAnalyse(this.saveTypeAnalyseForm.value).subscribe((res) =>{
      this.route.navigateByUrl("/type-analyse");
    })
  }

}
