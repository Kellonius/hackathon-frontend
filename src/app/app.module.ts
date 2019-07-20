import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientDetailPageComponent } from './components/patient-detail-page/patient-detail-page.component';
import { MedicalProfessionalDetailPageComponent } from './components/medical-professional-detail-page/medical-professional-detail-page.component';

//Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatTableModule, MatExpansionModule, MatListModule, MatBadgeModule, MatChipsModule, MatDatepickerModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatGridListModule, MatStepperModule, MatTabsModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientWrapperService } from './services/http-wrapper.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailPageComponent,
    MedicalProfessionalDetailPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
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
  providers: [HttpClientWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
