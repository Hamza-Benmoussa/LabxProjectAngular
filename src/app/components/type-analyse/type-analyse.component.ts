import { Component, OnInit } from '@angular/core';
import {TypeanalyseService} from "../../service/typeanalyse.service";
import {AnalyseService} from "../../service/analyse.service";

@Component({
  selector: 'app-type-analyse',
  templateUrl: './type-analyse.component.html',
  styleUrls: ['./type-analyse.component.css']
})
export class TypeAnalyseComponent implements OnInit {

  typeAnalyses = [];
  analyses = [];
  constructor(private serviceTypeAnalyse : TypeanalyseService , private serviceAnalyse : AnalyseService) { }

  ngOnInit(): void {
    this.getTypeAnalyse();
  }

  getTypeAnalyse(){
    this.serviceTypeAnalyse.getTypeAnalyse().subscribe((res) =>{
      console.log(res)
      this.typeAnalyses = res;
    })
  }

  deleteTypeAnalyse(id :number){
    this.serviceTypeAnalyse.deleteTypeAnalyse(id).subscribe((res) =>{
      console.log(res);
      this.getTypeAnalyse();
    })
  }

}
