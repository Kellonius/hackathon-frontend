import { Component, OnInit } from '@angular/core';
import {PatientDetailService} from '../../services/patient-detail/patient-detail.service';
import {PatientData} from '../../models/patient-data';
import {Medication} from '../../models/medication';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-patient-detail-page',
  templateUrl: './patient-detail-page.component.html',
  styleUrls: ['./patient-detail-page.component.scss']
})
export class PatientDetailPageComponent implements OnInit {

  patient: PatientData = new PatientData();

  columns = ['name', 'dose', 'route', 'frequency'];

  datasource: MatTableDataSource<Medication> = new MatTableDataSource<Medication>();

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
    this.patient.medications = [med, med];
    this.datasource.data = this.patient.medications;
  }

}
