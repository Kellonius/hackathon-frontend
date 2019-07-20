import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { APIService } from 'src/app/services/medical-professional/api.service';

import { PatientDataResponse } from 'src/app/responses/patient-data-response';


@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.scss']
})
export class AddPatientDialogComponent implements OnInit {
  searchTerm = '';

  mpId: number;

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

  submit(firstName, lastName, DOB, gender) {

  }

getNonPatients() {
  this.apiService.getNonpatientsForMP().subscribe(patientList => {
    this.nonPatientList = patientList;
  });
}

addPatient(patientId: number) {
  this.apiService.addPatientToMP(this.mpId, patientId).subscribe(() => {

  });
}

searchNonPatients() {
  let tempList = [];
 
  this.nonPatientList.forEach(nonPatient => {
      if (nonPatient.firstName + ' ' + nonPatient.lastName == this.searchTerm) {
        tempList = tempList.concat(nonPatient);
      }
  });

  this.patientList = tempList;
}
}
