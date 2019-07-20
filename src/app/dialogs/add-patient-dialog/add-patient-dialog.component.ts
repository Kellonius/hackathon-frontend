import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.scss']
})
export class AddPatientDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPatientDialogComponent>) {
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit(firstName, lastName, DOB, gender) {

  }

}
