import {Component, OnInit} from '@angular/core';
import {PatientDataResponse} from '../../responses/patient-data-response';
import {MatTableDataSource} from '@angular/material';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-epic-ish',
  templateUrl: './epic-ish.component.html',
  styleUrls: ['./epic-ish.component.scss']
})
export class EpicIshComponent implements OnInit {

  columns = ['Name', 'DOB', 'Gender'];
  users: MatTableDataSource<PatientDataResponse> = new MatTableDataSource();


  constructor(private patientDataService: PatientDataService, private router: Router) {

  }

  ngOnInit() {
  }

  search(term) {
    this.patientDataService.searchForPatientDetails(term).subscribe(data => {
      this.users.data = data;
    });
  }

  openMedInfo(row) {
    this.router.navigate(['epic-ish-meds', row.PatientId]).then();
  }

}
