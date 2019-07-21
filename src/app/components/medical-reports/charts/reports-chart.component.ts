import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, BaseChartDirective, Label} from 'ng2-charts';
import * as pluginAnnotations from 'chart.js';
import {MedicalReportsService} from '../../../services/medical-reports/medical-reports.service';
import {MonthlyReport} from '../../../models/monthly-report';

@Component({
  selector: 'app-line-chart',
  template: `
    <div class="">
      <div class="chart-container">
        <div class="chart" *ngIf="reportData.length > 0">
          <div style="display: block;">
            <canvas baseChart width="400" height="400"
                    [datasets]="lineChartData"
                    [labels]="lineChartLabels"
                    [options]="lineChartOptions"
                    [colors]="lineChartColors"
                    [legend]="lineChartLegend"
                    [chartType]="lineChartType"
                    [plugins]="lineChartPlugins"
                    (chartHover)="chartHovered($event)"
                    (chartClick)="chartClicked($event)"></canvas>
          </div>
          <div class="flex-item">
            <table class="table table-responsive table-condensed">
              <tr>
                <th *ngFor="let label of lineChartLabels">{{label}}</th>
              </tr>
              <tr *ngFor="let d of lineChartData; let i=index" [class]="'line-'+i">
                <td *ngFor="let label of lineChartLabels; let j=index">{{d && d.data[j]}}</td>
              </tr>
            </table>
          </div>
          <button mat-button mat-raised-button color="primary" (click)="byMonth()">By Month</button>
          <button mat-button mat-raised-button color="primary" (click)="byYear()">By Year</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-chart.component.scss']
})
export class ReportsChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  reportData: any[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private medicalReportsService: MedicalReportsService) {
  }

  ngOnInit() {
    this.byMonth();
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  byMonth() {
    this.medicalReportsService.getMonthlyData()
      .subscribe(data => {
        this.reportData = data;

        const unpickedUp = this.reportData.map(m => m.UnPickedUpPrescriptions);
        const pickedUp = this.reportData.map(m => m.PickedUpPrescriptions);

        this.lineChartData = [
          {data: unpickedUp, label: 'Not Picked Up'},
          {data: pickedUp, label: 'Picked Up'}
        ];

        const labels = this.reportData.map(m => m.Month + ' ' + m.Year);

        this.lineChartLabels = labels;
      });
  }

  byYear() {
    this.medicalReportsService.getMPInformation()
      .subscribe(data => {
        this.reportData = data;

        const unpickedUp = data.map(m => m.MonthlyReports.map(mr => mr.UnPickedUpPrescriptions).reduce((mr1, mr2) => mr1 + mr2));
        const pickedUp = data.map(m => m.MonthlyReports.map(mr => mr.PickedUpPrescriptions).reduce((mr1, mr2) => mr1 + mr2));

        this.lineChartData = [
          {data: unpickedUp, label: 'Not Picked Up'},
          {data: pickedUp, label: 'Picked Up'}
        ];

        const labels = data.map(m => m.Year);

        this.lineChartLabels = labels;
      });
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }
}
