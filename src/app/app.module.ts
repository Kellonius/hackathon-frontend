import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientDetailPageComponent} from './components/patient-detail-page/patient-detail-page.component';
import {MedicalProfessionalDetailPageComponent} from './components/medical-professional-detail-page/medical-professional-detail-page.component';
//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientWrapperService} from './services/http-wrapper.service';
import {PatientDataService} from './services/patient-data/patient-data.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {MedicalProfessionalPatientListComponent} from './components/medical-professional-patient-list/medical-professional-patient-list.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth/auth.service';
import { AddPatientDialogComponent } from './dialogs/add-patient-dialog/add-patient-dialog.component';
import {IncomingPrescriptionsComponent} from './components/pharmacy/incoming/incoming-prescriptions.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientDetailPageComponent,
    MedicalProfessionalDetailPageComponent,
    HeaderComponent,
    MedicalProfessionalPatientListComponent,
    LoginComponent,
    AddPatientDialogComponent,
    IncomingPrescriptionsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    HttpClientWrapperService,
    PatientDataService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddPatientDialogComponent]
})
export class AppModule {
}
