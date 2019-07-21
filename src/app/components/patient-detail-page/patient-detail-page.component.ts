import {Component, OnInit} from '@angular/core';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {Script} from '../../models/script';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {PatientDataResponse} from '../../responses/patient-data-response';
import {MedicationDosageModel} from '../../models/medication-dosage.model';

@Component({
  selector: 'app-patient-detail-page',
  template: `
    <div class="spacer"></div>
    <div class="patient-data mat-elevation-z8">
        <table *ngIf="patient" mat-table [dataSource]="[patient]" class="patient-table">

          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Patient Name</th>
            <td mat-cell *matCellDef="let p"> {{p.lastName + ', ' + p.firstName}} </td>
          </ng-container>

          <ng-container matColumnDef="dob">
            <th mat-header-cell *matHeaderCellDef> Date of Birth</th>
            <td mat-cell *matCellDef="let p"> {{p.DOB}} </td>
          </ng-container>

          <ng-container matColumnDef="email">
            <th mat-header-cell *matHeaderCellDef> E-mail</th>
            <td mat-cell *matCellDef="let p"> {{p.email}} </td>
          </ng-container>

          <ng-container matColumnDef="gender">
            <th mat-header-cell *matHeaderCellDef> Gender</th>
            <td mat-cell *matCellDef="let p"> {{p.Gender}} </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="patientColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: patientColumns;" class="patient-row"></tr>
        </table>
    </div>

    <div class="spacer"></div>
    <table class="medication-list mat-elevation-z8" mat-table [dataSource]="patientMedications">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name</th>
        <td mat-cell *matCellDef="let med">{{med.Medication.MedicalName}} ({{med.Medication.GenericName}})</td>
      </ng-container>

      <ng-container matColumnDef="dose">
        <th mat-header-cell *matHeaderCellDef> Dose</th>
        <td mat-cell *matCellDef="let med">{{med.Script.Dosage}}</td>
      </ng-container>

      <ng-container matColumnDef="route">
        <th mat-header-cell *matHeaderCellDef> Route</th>
        <td mat-cell *matCellDef="let med">{{med.Script.MedicationRoute}}</td>
      </ng-container>

      <ng-container matColumnDef="frequency">
        <th mat-header-cell *matHeaderCellDef> Frequency</th>
        <td mat-cell *matCellDef="let med">{{med.Script.MedicationTime}}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columns"></tr>
      <tr mat-row *matRowDef="let row; columns: columns"></tr>
    </table>

  `,
  styleUrls: ['./patient-detail-page.component.scss']
})
export class PatientDetailPageComponent implements OnInit {
  patientId: number;
  patient: PatientDataResponse;
  patientMedications: MedicationDosageModel[] = [];

  columns = ['name', 'dose', 'route', 'frequency'];
  patientColumns: string[] = ['name', 'dob', 'email', 'gender'];

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

    this.patientDetailService.getPatientDetailInformation(this.patientId)
      .subscribe(patient => {
        this.patient = patient;
        this.datasource.data = this.patient.Scripts;
      });
    this.patientDetailService.getPatientMedications(this.patientId)
      .subscribe(meds => this.patientMedications = meds);
  }
}
