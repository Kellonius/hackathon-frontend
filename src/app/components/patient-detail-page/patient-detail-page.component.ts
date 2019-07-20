import {Component, OnInit} from '@angular/core';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {PatientData} from '../../models/patient-data';
import {Script} from '../../models/script';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-detail-page',
  template: `
    <div>
      <p>{{patient.firstName}} {{patient.lastName}}</p>

    </div>

    <table class="medList" mat-table [dataSource]="patient.Scripts">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name</th>
        <td mat-cell *matCellDef="let element">{{element.name}}</td>
      </ng-container>

      <ng-container matColumnDef="dose">
        <th mat-header-cell *matHeaderCellDef> Dose</th>
        <td mat-cell *matCellDef="let element">{{element.dose}}</td>
      </ng-container>

      <ng-container matColumnDef="route">
        <th mat-header-cell *matHeaderCellDef> Route</th>
        <td mat-cell *matCellDef="let element">{{element.route}}</td>
      </ng-container>

      <ng-container matColumnDef="frequency">
        <th mat-header-cell *matHeaderCellDef> Frequency</th>
        <td mat-cell *matCellDef="let element">{{element.frequency}}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columns"></tr>
      <tr mat-row *matRowDef="let row; columns: columns"></tr>
    </table>

  `,
  styleUrls: ['./patient-detail-page.component.scss']
})
export class PatientDetailPageComponent implements OnInit {

  patient: PatientData = new PatientData();

  columns = ['name', 'dose', 'route', 'frequency'];

  datasource: MatTableDataSource<Script> = new MatTableDataSource<Script>();

  constructor(
    private route: ActivatedRoute,
    private patientDetailService: PatientDataService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
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
