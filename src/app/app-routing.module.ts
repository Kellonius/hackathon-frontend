import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientDetailPageComponent} from './components/patient-detail-page/patient-detail-page.component';
import { MedicalProfessionalDetailPageComponent } from './components/medical-professional-detail-page/medical-professional-detail-page.component';
import { MedicalProfessionalPatientListComponent } from './components/medical-professional-patient-list/medical-professional-patient-list.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';
import {IncomingPrescriptionsComponent} from './components/pharmacy/incoming/incoming-prescriptions.component';
import {OutgoingPrescriptionsComponent} from './components/pharmacy/outgoing/outgoing-prescriptions.component';
import {EpicIshComponent} from './components/epic-ish/epic-ish.component';
import {PatientSearchComponent} from './components/patient/patient-search.component';
import {EpicMedsComponent} from './components/epic-meds/epic-meds.component';
import { MedicalReportsComponent } from './components/medical-reports/medical-reports.component';
import {ReportsChartComponent} from './components/medical-reports/charts/reports-chart.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patient/:id',
    component: PatientDetailPageComponent
  },
  {
    path: 'medical-professional-patient-list',
    component: MedicalProfessionalPatientListComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'reports',
    component: MedicalReportsComponent
  },
  {
    path: 'reports/charts',
    component: ReportsChartComponent
  },
  {
    path: 'pharmacy/incoming',
    component: IncomingPrescriptionsComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'pharmacy/outgoing',
    component: OutgoingPrescriptionsComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'medical-professional/:id',
    component: MedicalProfessionalDetailPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    redirectTo: '/medical-professional-patient-list',
    pathMatch: 'full',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'patient-search',
    component: PatientSearchComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'patient/:id',
    component: PatientDetailPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'epic-ish',
    component: EpicIshComponent
  },
  {
    path: 'epic-ish-meds/:id',
    component: EpicMedsComponent
  },

  // {
  //   path: 'patient-search',
  //   component: PatientDetailPageComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
