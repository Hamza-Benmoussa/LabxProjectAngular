import { Component, OnInit } from '@angular/core';
import {ReactifService} from "../../../service/reactif.service";

@Component({
  selector: 'app-afficher-reactif',
  templateUrl: './afficher-reactif.component.html',
  styleUrls: ['./afficher-reactif.component.css']
})
export class AfficherReactifComponent implements OnInit {

  reactifs =[];
  constructor(private serviceReactif : ReactifService) { }

  ngOnInit(): void {
    this.getReactifs();
  }

  getReactifs(){
    this.serviceReactif.getReactifs().subscribe((res)=>{
      this.reactifs=res;
    })
  }

  deleteReactif(id:number){
    this.serviceReactif.deleteReactif(id).subscribe((res) =>{
      this.getReactifs();
    })
  }

}
