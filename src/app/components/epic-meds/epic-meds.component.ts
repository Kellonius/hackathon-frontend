import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Script} from '../../models/script';
import {PatientDataService} from '../../services/patient-data/patient-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-epic-meds',
  templateUrl: './epic-meds.component.html',
  styleUrls: ['./epic-meds.component.scss']
})
export class EpicMedsComponent implements OnInit {

  columns = ['Name', 'Dosage', 'Route', 'Frequency', 'Date Prescribed', 'Prescribed By', 'export'];
  meds: MatTableDataSource<Script> = new MatTableDataSource();

  constructor(private patientService: PatientDataService, private route: ActivatedRoute, private auth: AuthService, private router: Router) {
    this.route.params.subscribe(data => {
      console.log(data);
      this.patientService.getPatientDetailInformation(data.id).subscribe(patientData => {
        console.log(patientData);
        this.meds = new MatTableDataSource(patientData.Scripts);
      });
    });
  }

  ngOnInit() {
  }

  signout() {
    this.auth.loggedInUser = null;
    this.router.navigateByUrl('/login').then(done => {
        window.location.reload();
      }
    );
  }

}
