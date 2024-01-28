import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeAnalyseComponent} from "./type-analyse/type-analyse.component";
import {TestAnalyseComponent} from "./test-analyse/test-analyse.component";
import {AnalyseComponent} from "./analyse/analyse.component";
import {EchantillonComponent} from "./echantillon/echantillon.component";
import {PlanificationComponent} from "./planification/planification.component";
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";

const routes: Routes = [
  {path : "type-analyse" , component : TypeAnalyseComponent},
  {path : "test-analyse" , component : TestAnalyseComponent},
  {path : "analyse" , component : AnalyseComponent},
  {path : "echantillon" , component : EchantillonComponent},
  {path : "planification" , component : PlanificationComponent},
  {path : "" , component : HomeComponent},
  {path : "nav" , component : NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
