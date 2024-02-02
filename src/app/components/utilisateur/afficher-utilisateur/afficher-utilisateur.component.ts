import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../../service/utilisateur.service";

@Component({
  selector: 'app-afficher-utilisateur',
  templateUrl: './afficher-utilisateur.component.html',
  styleUrls: ['./afficher-utilisateur.component.css']
})
export class AfficherUtilisateurComponent implements OnInit {

  utilisateurs = [];
  constructor(private serviceUtilisateur : UtilisateurService) { }

  ngOnInit(): void {
    this.getUtilisateur();
  }

  getUtilisateur(){
    this.serviceUtilisateur.getUtilisateurs().subscribe((res) =>{
      this.utilisateurs=res;
    })
  }

  deleteUtilisateur(id : number){
    this.serviceUtilisateur.deleteUtilisateur(id).subscribe((res)=>{
      this.getUtilisateur();
    })
  }

}
