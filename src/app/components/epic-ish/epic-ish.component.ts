import { Component, OnInit } from '@angular/core';
import {PatientDataResponse} from '../../responses/patient-data-response';
import {MatDialog, MatDialogConfig, MatDialogRef, MatTableDataSource} from '@angular/material';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {MedDialogComponent} from '../../dialogs/med-dialog/med-dialog.component';

@Component({
  selector: 'app-epic-ish',
  templateUrl: './epic-ish.component.html',
  styleUrls: ['./epic-ish.component.scss']
})
export class EpicIshComponent implements OnInit {

  columns = ['Name', 'DOB', 'Gender'];
  users: MatTableDataSource<PatientDataResponse> = new MatTableDataSource();

  medDialogRef: MatDialogRef<MedDialogComponent>;

  constructor(private patientDataService: PatientDataService, private dialog: MatDialog) {

  }

  ngOnInit() {
  }

  search(term) {
    this.patientDataService.searchForPatientDetails(term).subscribe(data => {
      console.log(data);
      this.users.data = data;
    });
  }

  openMedDialog(row) {
    const config: MatDialogConfig = {
      data: {
        stuff: row
      },
      width: '80%',
      minHeight: '500px',
      panelClass: 'custom-dialog-container'
    };

    this.medDialogRef = this.dialog.open(MedDialogComponent, config);
    this.medDialogRef.afterClosed().subscribe(result => {

    });
  }

}
