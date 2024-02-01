import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAnalyseComponent } from './components/test-analyse/test-analyse.component';
import { TypeAnalyseComponent } from './components/type-analyse/type-analyse.component';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { EchantillonComponent } from './components/echantillon/echantillon.component';
import { PlanificationComponent } from './components/planification/planification.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AddEchantillonComponent } from './components/echantillon/add-echantillon/add-echantillon.component';
import { UpdateEchantillonComponent } from './components/echantillon/update-echantillon/update-echantillon.component';
import { DetailsEchantillonComponent } from './components/echantillon/details-echantillon/details-echantillon.component';
import { AddAnalyseComponent } from './components/analyse/add-analyse/add-analyse.component';
import { AddPlanificationComponent } from './components/planification/add-planification/add-planification.component';
import { UpdatePlanificationComponent } from './components/planification/update-planification/update-planification.component';
import { AddTestComponent } from './components/test-analyse/add-test/add-test.component';
import { UpdateTestComponent } from './components/test-analyse/update-test/update-test.component';
import { DetailsTestComponent } from './components/test-analyse/details-test/details-test.component';
import { AddTypeComponent } from './components/type-analyse/add-type/add-type.component';
import { UpdateTypeComponent } from './components/type-analyse/update-type/update-type.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule , FormsModule} from "@angular/forms";
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import {PatientComponent} from './components/patient/patient.component';
import { AddMaterialComponent } from './components/material/add-material/add-material.component';
import { UpdateMaterialComponent } from './components/material/update-material/update-material.component';
import { AfficherMaterialComponent } from './components/material/afficher-material/afficher-material.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { UpdateUtilisateurComponent } from './components/utilisateur/update-utilisateur/update-utilisateur.component';
import { AfficherUtilisateurComponent } from './components/utilisateur/afficher-utilisateur/afficher-utilisateur.component';
import { AddReactifComponent } from './components/reactif/add-reactif/add-reactif.component';
import { UpdateReactifComponent } from './components/reactif/update-reactif/update-reactif.component';
import { AfficherReactifComponent } from './components/reactif/afficher-reactif/afficher-reactif.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAnalyseComponent,
    TypeAnalyseComponent,
    AnalyseComponent,
    EchantillonComponent,
    PlanificationComponent,
    HomeComponent,
    NavComponent,
    AddEchantillonComponent,
    UpdateEchantillonComponent,
    DetailsEchantillonComponent,
    AddAnalyseComponent,
    AddPlanificationComponent,
    UpdatePlanificationComponent,
    AddTestComponent,
    UpdateTestComponent,
    AfficherReactifComponent,
    AddReactifComponent,
    UpdateReactifComponent,
    DetailsTestComponent,
    AddTypeComponent,
    AddPatientComponent,
    UpdateTypeComponent,
    UpdatePatientComponent, PatientComponent, AddMaterialComponent, UpdateMaterialComponent, AfficherMaterialComponent, AddUtilisateurComponent, UpdateUtilisateurComponent, AfficherUtilisateurComponent, AddReactifComponent, UpdateReactifComponent, AfficherReactifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
