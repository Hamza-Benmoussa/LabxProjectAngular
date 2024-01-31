import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeAnalyseComponent} from "./components/type-analyse/type-analyse.component";
import {TestAnalyseComponent} from "./components/test-analyse/test-analyse.component";
import {AnalyseComponent} from "./components/analyse/analyse.component";
import {EchantillonComponent} from "./components/echantillon/echantillon.component";
import {PlanificationComponent} from "./components/planification/planification.component";
import {HomeComponent} from "./components/home/home.component";
import {NavComponent} from "./components/nav/nav.component";
import {AddTypeComponent} from "./components/type-analyse/add-type/add-type.component";
import {UpdateTypeComponent} from "./components/type-analyse/update-type/update-type.component";
import {AddTestComponent} from "./components/test-analyse/add-test/add-test.component";
import {UpdateTestComponent} from "./components/test-analyse/update-test/update-test.component";
import {DetailsTestComponent} from "./components/test-analyse/details-test/details-test.component";
import {AddPlanificationComponent} from "./components/planification/add-planification/add-planification.component";
import {UpdatePlanificationComponent} from "./components/planification/update-planification/update-planification.component";
import {AddEchantillonComponent} from "./components/echantillon/add-echantillon/add-echantillon.component";
import {UpdateEchantillonComponent} from "./components/echantillon/update-echantillon/update-echantillon.component";
import {DetailsEchantillonComponent} from "./components/echantillon/details-echantillon/details-echantillon.component";
import {AddAnalyseComponent} from "./components/analyse/add-analyse/add-analyse.component";
import {AddPatientComponent} from "./components/patient/add-patient/add-patient.component";
import {UpdatePatientComponent} from "./components/patient/update-patient/update-patient.component";
import {UpdateMaterialComponent} from "./components/material/update-material/update-material.component";
import {AddMaterialComponent} from "./components/material/add-material/add-material.component";
import {AfficherMaterialComponent} from "./components/material/afficher-material/afficher-material.component";
import {PatientComponent} from "./components/patient/patient.component";

const routes: Routes = [
  {path : "type-analyse" , component : TypeAnalyseComponent},
  {path : "patient" , component : PatientComponent},
  {path : "add-patient" , component : AddPatientComponent},
  {path : "update-patient/:id" , component : UpdatePatientComponent},
  {path:"add-type" , component :AddTypeComponent},
  {path:"update-type" , component :UpdateTypeComponent},
  {path : "test-analyse" , component : TestAnalyseComponent},
  {path:"add-test" , component :AddTestComponent},
  {path:"update-test" , component :UpdateTestComponent},
  {path:"details-test" , component :DetailsTestComponent},
  {path : "analyse" , component : AnalyseComponent},
  {path:"add-analyse" , component :AddAnalyseComponent},
  {path : "echantillon" , component : EchantillonComponent},
  {path:"add-echantillon" , component :AddEchantillonComponent},
  {path:"update-echantillon/:id" , component :UpdateEchantillonComponent},
  {path:"details-echantillon" , component :DetailsEchantillonComponent},
  {path:"afficher-material/:id" , component:UpdateMaterialComponent},
  {path : "planification" , component : PlanificationComponent},
  {path:"add-planification" , component :AddPlanificationComponent},
  {path:"update-planification" , component :UpdatePlanificationComponent},
  {path:"add-material" , component :AddMaterialComponent},
  {path:"afficher-material" , component :AfficherMaterialComponent},
  {path : "" , component : HomeComponent},
  {path : "nav" , component : NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
