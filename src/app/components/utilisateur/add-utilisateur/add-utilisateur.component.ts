import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UtilisateurService } from "../../../service/utilisateur.service";
import { Router } from "@angular/router";
import {RoleUser} from "../../../entity/RoleUser";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  saveUtilisateurForm: FormGroup;
  roles: string[] = Object.values(RoleUser); // Obtenez les valeurs de l'enum

  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.saveUtilisateurForm = this.fb.group({
      nom: [null, [Validators.required]],
      email: [null, [Validators.required]],
      motDePasse: [null, [Validators.required]],
      role: [null, [Validators.required]]
    });
  }

  saveUtilisateur() {
    this.utilisateurService.saveUtilisateur(this.saveUtilisateurForm.value).subscribe((res) => {
      this.router.navigateByUrl("/afficher-utilisateur");
    });
  }
}
