import { Component, OnInit } from '@angular/core';
import { MedicalReportsService } from 'src/app/services/medical-reports/medical-reports.service';
import { MonthlyReport } from 'src/app/models/monthly-report';

@Component({
  selector: 'app-medical-reports',
  templateUrl: './medical-reports.component.html',
  styleUrls: ['./medical-reports.component.scss']
})
export class MedicalReportsComponent implements OnInit {

  reports: MonthlyReport[];

  constructor(private medicalReportsService: MedicalReportsService) { }

  ngOnInit() {
    this.medicalReportsService.getMPInformation().subscribe(response => {
      this.reports = response;
    });
  }
}
