import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { APIService } from 'src/app/services/medical-professional/api.service';

import { PatientDataResponse } from 'src/app/responses/patient-data-response';
import { PatientCreationRequest } from 'src/app/requests/patient-creation-request';


@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.scss']
})
export class AddPatientDialogComponent implements OnInit {
  searchTerm = '';

  mpId: number;

  atRisk = false;
  firstName = '';
  lastName = '';
  dob = '';
  gender = '';
  ssn = '';
  email = '';

  patientList: PatientDataResponse[] = [];

  nonPatientList: PatientDataResponse[] = [];

  columns = ['Name', 'DOB', 'Gender', 'Add'];

  constructor(public dialogRef: MatDialogRef<AddPatientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private apiService: APIService) { 
    this.mpId = this.data.mpId;
    console.log('mpID: ' + this.mpId)
  }

  ngOnInit() {
    this.getNonPatients();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {
    let request = {
      DOB: this.dob,
      Gender: this.gender,
      SocialSecurity: this.ssn,
      MPId: this.mpId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.ssn,
      AtRisk: this.atRisk
    };

    this.apiService.createPatient(request).subscribe(() => {
      this.atRisk = false;
      this.firstName = '';
      this.lastName = '';
      this.dob = '';
      this.gender = '';
      this.ssn = '';
      this.email = '';
    });
  }

getNonPatients() {
  this.apiService.getNonpatientsForMP().subscribe(response => {
    this.nonPatientList = response;
  });
}

addPatient(patientId: number) {
  this.apiService.addPatientToMP(this.mpId, patientId).subscribe(() => {
  });
}

searchNonPatients() {
  let tempList = [];
 
  this.nonPatientList.forEach(nonPatient => {
      if (
          nonPatient.firstName == this.searchTerm ||
          nonPatient.lastName == this.searchTerm ||
          nonPatient.firstName + ' ' + nonPatient.lastName == this.searchTerm ||
          nonPatient.Gender == this.searchTerm          
        ) {
          tempList = tempList.concat(nonPatient);
      }
  });

  this.patientList = tempList;
}

clearSearch() {
  this.searchTerm = '';
  this.patientList = [];
}

}
