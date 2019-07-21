import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {Script} from '../../models/script';
import {PatientDataResponse} from '../../responses/patient-data-response';

@Component({
  selector: 'app-med-dialog',
  templateUrl: './med-dialog.component.html',
  styleUrls: ['./med-dialog.component.scss']
})
export class MedDialogComponent implements OnInit {

  meds: MatTableDataSource<PatientDataResponse> = new MatTableDataSource();
  columns: ['Name', 'Dosage', 'Route', 'Frequency', 'Date Prescribed', 'Prescribed By'];

  constructor(public dialogRef: MatDialogRef<MedDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    this.meds.data = [...this.data.stuff.Scripts];
  }

  ngOnInit() {
    this.meds.data = [...this.data.stuff.Scripts];
    console.log(this.meds);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
