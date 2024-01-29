import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAnalyseComponent } from './test-analyse/test-analyse.component';
import { TypeAnalyseComponent } from './type-analyse/type-analyse.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { EchantillonComponent } from './echantillon/echantillon.component';
import { PlanificationComponent } from './planification/planification.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    AddPatientComponent,
    PatientDetailsComponent,
    PatientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
