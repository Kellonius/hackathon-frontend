import { Component, OnInit } from '@angular/core';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {PatientData} from '../../models/patient-data';
import {Script} from '../../models/script';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-patient-detail-page',
  templateUrl: './patient-detail-page.component.html',
  styleUrls: ['./patient-detail-page.component.scss']
})
export class PatientDetailPageComponent implements OnInit {

  patient: PatientData = new PatientData();

  columns = ['name', 'dose', 'route', 'frequency'];

  datasource: MatTableDataSource<Script> = new MatTableDataSource<Script>();

  constructor(private patientDetailService: PatientDataService) { }

  ngOnInit() {
    const med = new Script();
    med.medicationId = 'Metoprolol';
    med.dosage = '10mg';
    med.medicationRoute = 'PO';
    med.medicationTime = 'Twice Daily';
    this.patient.id = 1;
    this.patient.firstName = 'First';
    this.patient.lastName = 'Last';
    this.patient.Scripts = [med, med];
    this.datasource.data = this.patient.Scripts;
  }

}
