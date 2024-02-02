import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../../service/utilisateur.service";
import {RoleUser} from "../../../entity/RoleUser";

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  updateUtilisateurForm:FormGroup;
  roles: string[] = Object.values(RoleUser);
  id:number = this.activeRoute.snapshot.params["id"];
  constructor(
    private activeRoute : ActivatedRoute,
    private utilisateurService : UtilisateurService,
    private router : Router,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
this.updateUtilisateurForm = this.fb.group({
  nom: [null, [Validators.required]],
  email: [null, [Validators.required]],
  motDePasse: [null, [Validators.required]],
  role: [null, [Validators.required]]
})
    this.getUtlisateurById();
  }
getUtlisateurById(){
    this.utilisateurService.getUtilisateurById(this.id).subscribe((res) =>{
      this.updateUtilisateurForm.patchValue(res);
    })
}

updateUtilisateur():void{
    this.utilisateurService.updateUtilisateur(this.id,this.updateUtilisateurForm.value).subscribe((res) =>{
      if (res.id !=null){
        this.router.navigateByUrl("/afficher-utilisateur")
      }
    })
}
}
