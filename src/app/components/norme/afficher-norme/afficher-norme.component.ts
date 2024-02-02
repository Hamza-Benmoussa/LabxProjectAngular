import { Component, OnInit } from '@angular/core';
import {NormeService} from "../../../service/norme.service";

@Component({
  selector: 'app-afficher-norme',
  templateUrl: './afficher-norme.component.html',
  styleUrls: ['./afficher-norme.component.css']
})
export class AfficherNormeComponent implements OnInit {

  normes=[];
  constructor(private serviceNorme : NormeService) { }

  ngOnInit(): void {
    this.getNormes();
  }

  getNormes(){
    this.serviceNorme.getNormes().subscribe((res)=>{
      console.log(res);
      this.normes = res;
    })
  }

  deleteMaterial(id : number){
    this.serviceNorme.deleteNorme(id).subscribe((res) =>{
      console.log(res);
      this.getNormes();
    })
  }
}
