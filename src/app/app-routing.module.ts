import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeAnalyseComponent} from "./type-analyse/type-analyse.component";
import {TestAnalyseComponent} from "./test-analyse/test-analyse.component";
import {AnalyseComponent} from "./analyse/analyse.component";
import {EchantillonComponent} from "./echantillon/echantillon.component";
import {PlanificationComponent} from "./planification/planification.component";
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "nav" , component : NavComponent},
  {path : "type-analyse" , component : TypeAnalyseComponent},
  {path : "test-analyse" , component : TestAnalyseComponent},
  {path : "analyse" , component : AnalyseComponent},
  {path : "echantillon" , component : EchantillonComponent},
  {path : "planification" , component : PlanificationComponent},
  //{ path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsListComponent },
 // { path: 'add', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
