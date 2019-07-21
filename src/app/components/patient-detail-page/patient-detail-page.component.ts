import {Component, OnInit} from '@angular/core';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {PatientData} from '../../models/patient-data';
import {Script} from '../../models/script';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {PatientDataResponse} from '../../responses/patient-data-response';
import {forkJoin} from 'rxjs';

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
  patientId: number;
  patient: PatientDataResponse = new PatientDataResponse();
  patientMedications: any[] = [];

  columns = ['name', 'dose', 'route', 'frequency'];

  datasource: MatTableDataSource<Script> = new MatTableDataSource<Script>();

  constructor(
    private route: ActivatedRoute,
    private patientDetailService: PatientDataService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.patientId = +params.get('id');
    });

    forkJoin(
      this.patientDetailService.getPatientDetailInformation(this.patientId),
      this.patientDetailService.getPatientMedications(this.patientId)
    ).subscribe(res => {
      this.patient = res[0];
      this.patientMedications = res[1];
      console.log(this.patient);
      console.log(this.patientMedications);

      this.datasource.data = this.patient.Scripts;
    });

  }

}
