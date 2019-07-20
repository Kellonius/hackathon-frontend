import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientDetailPageComponent} from './components/patient-detail-page/patient-detail-page.component';
import { MedicalProfessionalDetailPageComponent } from './components/medical-professional-detail-page/medical-professional-detail-page.component';
import { MedicalProfessionalPatientListComponent } from './components/medical-professional-patient-list/medical-professional-patient-list.component';

const routes: Routes = [
  {
    path: 'patient/:id',
    component: PatientDetailPageComponent
  },
  {
    path: 'medical-professional-patient-list',
    component: MedicalProfessionalPatientListComponent
  },
   // {
  //   path: 'pharmacy/:id',
  //   component: PatientDetailPageComponent
  // }
  {
    path: 'medical-professional/:id',
    component: MedicalProfessionalDetailPageComponent
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
