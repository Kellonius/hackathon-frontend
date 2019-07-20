import { Component, OnInit } from '@angular/core';
import {PatientDetailService} from '../../services/patient-detail/patient-detail.service';
import {PatientDetail} from '../../models/patient-detail';
import {Medication} from '../../models/medication';

@Component({
  selector: 'app-patient-detail-page',
  templateUrl: './patient-detail-page.component.html',
  styleUrls: ['./patient-detail-page.component.sass']
})
export class PatientDetailPageComponent implements OnInit {

  patient: PatientDetail = new PatientDetail();

  constructor(private patientDetailService: PatientDetailService) { }

  ngOnInit() {
    const med = new Medication();
    med.name = 'Metoprolol';
    med.dose = '10mg';
    med.route = 'PO';
    med.frequency = 'Twice Daily';
    this.patient.id = 1;
    this.patient.firstName = 'First';
    this.patient.lastName = 'Last';
    this.patient.medications = [med];
  }

}
