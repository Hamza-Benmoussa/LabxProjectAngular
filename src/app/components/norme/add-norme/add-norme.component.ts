import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterialService} from "../../../service/material.service";
import {Router} from "@angular/router";
import {NormeService} from "../../../service/norme.service";

@Component({
  selector: 'app-add-norme',
  templateUrl: './add-norme.component.html',
  styleUrls: ['./add-norme.component.css']
})
export class AddNormeComponent implements OnInit {

  saveNormeForm:FormGroup;
  constructor(private normeService : NormeService , private fb:FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.saveNormeForm = this.fb.group({
      description: [null ,[Validators.required]],
      min: [null ,[Validators.required]],
      max: [null ,[Validators.required]],
      unite: [null ,[Validators.required]]
    })
  }

  saveNorme(){
    this.normeService.saveNorme(this.saveNormeForm.value).subscribe((res) =>{
      this.router.navigateByUrl("/afficher-norme")
    })
  }
}
