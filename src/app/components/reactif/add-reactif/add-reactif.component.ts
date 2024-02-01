import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReactifService} from "../../../service/reactif.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-reactif',
  templateUrl: './add-reactif.component.html',
  styleUrls: ['./add-reactif.component.css']
})
export class AddReactifComponent implements OnInit {

  saveReactifForm : FormGroup;
  constructor(private reactifService : ReactifService ,
              private fb:FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.saveReactifForm = this.fb.group({
      nom:[null,[Validators.required]],
      description:[null,[Validators.required]],
      quantiteStock:[null,[Validators.required]],
      dateExpiration:[null,[Validators.required]],
      fournisseurNom:[null,[Validators.required]]
    })
  }

  saveReactif(){
    this.reactifService.saveReactif(this.saveReactifForm.value).subscribe((res) =>{
      this.router.navigateByUrl("afficher-reactif")
    })
  }
}
