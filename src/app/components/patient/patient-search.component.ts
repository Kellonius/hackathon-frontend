import {Component, OnInit} from '@angular/core';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {PatientDataResponse} from '../../responses/patient-data-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-search',
  template: `
    <div class="patient-search">
      <form (submit)="search(searchField.value)">
        <mat-form-field class="patient-search-bar">
          <input matInput placeholder="Search for patients" #searchField>
        </mat-form-field>
        <button mat-icon-button>
          <mat-icon>search</mat-icon>
        </button>
      </form>
    </div>

    <div class="patient-list">
      <table *ngIf="patients.length > 0" mat-table [dataSource]="patients" class="mat-elevation-z8">

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Patient Name</th>
          <td mat-cell *matCellDef="let patient"> {{patient.lastName + ', ' + patient.firstName}} </td>
        </ng-container>

        <ng-container matColumnDef="dob">
          <th mat-header-cell *matHeaderCellDef> Date of Birth</th>
          <td mat-cell *matCellDef="let patient"> {{patient.DOB}} </td>
        </ng-container>

        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef> E-mail</th>
          <td mat-cell *matCellDef="let patient"> {{patient.Email}} </td>
        </ng-container>

        <ng-container matColumnDef="gender">
          <th mat-header-cell *matHeaderCellDef> Gender</th>
          <td mat-cell *matCellDef="let patient"> {{patient.Gender}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;" class="patient-row"
            (click)="clickRow(row)"></tr>
      </table>
    </div>
  `,
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dob', 'Email', 'gender'];
  patients: PatientDataResponse[] = [];

  constructor(
    private router: Router,
    private patientService: PatientDataService
  ) {
  }

  ngOnInit() {
  }

  search(terms: string) {
    this.patientService.searchPatients(terms).subscribe(patients => {
      this.patients = patients;
    });
  }

  clickRow(patient: PatientDataResponse) {
    this.router.navigateByUrl('patient/' + patient.PatientId);
  }
}
