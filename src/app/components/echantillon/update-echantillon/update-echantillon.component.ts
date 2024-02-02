import { Component, OnInit } from '@angular/core';
import { EchantillonService } from "../../../service/echantillon.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-echantillon',
  templateUrl: './update-echantillon.component.html',
  styleUrls: ['./update-echantillon.component.css']
})
export class UpdateEchantillonComponent implements OnInit {


  ngOnInit(): void {
  }
}
