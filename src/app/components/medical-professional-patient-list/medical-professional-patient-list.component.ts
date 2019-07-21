import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MedicalProfessionalService } from 'src/app/services/medical-professional/medical-professional.service';
import { PatientDataResponse } from 'src/app/responses/patient-data-response';
import { Script } from 'src/app/models/script';
import {AuthService} from '../../services/auth/auth.service';
import {MedicalProfessional} from '../../models/medical-professional';
import {MatDialog} from '@angular/material';
import {AddPatientDialogComponent} from '../../dialogs/add-patient-dialog/add-patient-dialog.component';
import {MatDialogConfig, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-medical-professional-patient-list',
  templateUrl: './medical-professional-patient-list.component.html',
  styleUrls: ['./medical-professional-patient-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MedicalProfessionalPatientListComponent implements OnInit {
  columns = ['Name', 'DOB', 'Gender', 'Risk'];

  columns2 = ['Generic Drug Name', 'Medical Drug Name', 'Dose', 'Frequency', 'Issue Date', 'Filled', 'Picked Up'];

  expandedElement: Script | null;

  patientList: PatientDataResponse[] = [];
  originalPatientList: PatientDataResponse[] = [];

  user: MedicalProfessional;

  searchTerm = '';
  
  addPatientDialogRef: MatDialogRef<AddPatientDialogComponent>;

  mpId: number;
  email: string;

  constructor(private apiService: MedicalProfessionalService,
              private authService: AuthService,
              private dialog: MatDialog) {
    this.user = this.authService.loggedInUser;
  }

  ngOnInit() {
    this.getPatientData();

    this.setMpId();
  }

  openNewUserModal() {
    const config: MatDialogConfig = {
      data: {
        mpId: this.mpId,
        email: this.email
      },
      width: '80%',
      minHeight: '500px',
      panelClass: 'custom-dialog-container'
    };

    this.addPatientDialogRef = this.dialog.open(AddPatientDialogComponent, config);
    this.addPatientDialogRef.afterClosed().subscribe(result => {
      this.getPatientData();
    });
  }

  setMpId() {
    this.apiService.getMPInformation(this.user.email).subscribe(response => {
      this.mpId = response.MPId;
      this.email = response.email;
    });
  }

  getPatientData() {
    this.apiService.getMPPatientInformation(this.user.email).subscribe(response => {
      this.patientList = response;
      this.originalPatientList = response;
    });
  }
  
  fullName() {
    return this.user.firstName + ' ' + this.user.lastName;
  }

  filterPatients() {
    let tempList = [];

    this.patientList.forEach(patient => {
      if (
        patient.firstName == this.searchTerm ||
        patient.lastName == this.searchTerm ||
        patient.firstName + ' ' + patient.lastName == this.searchTerm ||
        patient.Gender == this.searchTerm          
      ) {
        tempList = tempList.concat(patient);
      }
    });
    this.patientList = tempList;
  }

  clearSearch() {
    this.searchTerm = '';
    this.patientList = this.originalPatientList;
  }
}