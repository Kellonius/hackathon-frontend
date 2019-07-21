import { Component, OnInit } from '@angular/core';
import { MedicalReportsService } from 'src/app/services/medical-reports/medical-reports.service';
import { MonthlyReport } from 'src/app/models/monthly-report';
import { YearlyReport } from 'src/app/models/yearly-reports';

@Component({
  selector: 'app-medical-reports',
  templateUrl: './medical-reports.component.html',
  styleUrls: ['./medical-reports.component.scss']
})
export class MedicalReportsComponent implements OnInit {

  reports: YearlyReport[] = [];

  columns = ['Month', 'PickedUpPrescriptions', 'UnPickedUpPrescriptions', 'PickUpRate'];

  constructor(private medicalReportsService: MedicalReportsService) { }

  ngOnInit() {
    this.medicalReportsService.getMPInformation().subscribe(response => {
      this.reports = response;
    });
  }

  calculateForYear(data: YearlyReport) {
    let percentage = 0;

    let notPickedUp = 0;
    let pickedUp = 0;
    let total = 0;
    
    data.MonthlyReports.forEach(monthlyReport => {
      notPickedUp = notPickedUp + monthlyReport.UnPickedUpPrescriptions;
      pickedUp = pickedUp + monthlyReport.PickedUpPrescriptions;
      total = total + monthlyReport.PickedUpPrescriptions + monthlyReport.UnPickedUpPrescriptions;
    });

    let thing =  pickedUp / total;

    return Number(thing * 100).toFixed(2);
  }

  calculateForMonth(data: MonthlyReport) {
    let total = data.PickedUpPrescriptions + data.UnPickedUpPrescriptions;
    let pickedUpRate = data.PickedUpPrescriptions / total;
    return Number(pickedUpRate * 100).toFixed(2);
  }

  totalPrescriptions() {
    return this.calculateTotalPickedUp() + this.calculateTotalNotPickedUp();
  }

  calculateTotalPickupPercentage() {
    let pickedupRate = this.calculateTotalPickedUp() / this.totalPrescriptions();
    return Number(pickedupRate * 100).toFixed(2);
  }

  calculateTotalPickedUp() {
    let total = 0;

    this.reports.forEach(yearlyReport => {
      yearlyReport.MonthlyReports.forEach(month => {
        total = total + month.PickedUpPrescriptions;
      });
    });

    return total;
  }

  calculateTotalNotPickedUp() {
    let total = 0;

    this.reports.forEach(yearlyReport => {
      yearlyReport.MonthlyReports.forEach(month => {
        total = total + month.UnPickedUpPrescriptions;
      });
    });

    return total;
  }
}
