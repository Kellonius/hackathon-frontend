import {Component, OnInit} from '@angular/core';
import {PharmacyService} from '../../../services/pharmacy/pharmacy.service';
import {PatientScript} from '../../../models/patient-script';

@Component({
  selector: 'app-incoming-prescriptions',
  template: `
    <div class="incoming-prescriptions">
      <div *ngFor="let script of patientScripts; let index = index">
        <mat-card class="mat-elevation-z2 prescription-card"
                  (click)="toggleFilled(script)"
                  [ngClass]="{'filled': isFilled(script)}">
          <div class="prescription-info-container">
            <div class="prescription-name">
              {{script.MedicationMedicalName + ' (' + script.MedicationGenericName + ')'}}
            </div>
            <div>for</div>
            <div class="prescription-patient">
              {{script.PatientName}}
            </div>
          </div>
          <div class="prescription-by">
            Prescribed by {{script.PrescribedBy}}
          </div>
          <div *ngIf="isFilled(script)" class="prescription-filled">
            <mat-icon>check_circle_outline</mat-icon>
          </div>
        </mat-card>
      </div>
      <div class="fill-prescriptions-section">
        <button class="fill-prescriptions-button"
                mat-raised-button color="primary"
                (click)="fillPrescriptions()">
          Fill Prescriptions
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./incoming-prescriptions.component.scss']
})
export class IncomingPrescriptionsComponent implements OnInit {
  patientScripts: PatientScript[] = [];
  filledScripts: PatientScript[] = [];

  constructor(private pharmacyService: PharmacyService) {
  }

  ngOnInit() {
    this.pharmacyService.getIncomingPrescriptions().subscribe(scripts => {
      this.patientScripts = scripts;
    });
  }

  fillPrescriptions() {
    this.pharmacyService.fillPrescriptions(this.filledScripts.map(f => f.ScriptId))
      .subscribe(f => {
        this.pharmacyService.getIncomingPrescriptions().subscribe(scripts => {
          this.patientScripts = scripts;
          this.filledScripts = [];
        });
      });
  }

  isFilled(script: PatientScript): boolean {
    return !!this.filledScripts.find(f => f === script);
  }

  toggleFilled(script: PatientScript) {
    if (this.filledScripts.find(f => f === script)) {
      this.filledScripts = this.filledScripts.filter(f => f !== script);
    } else {
      this.filledScripts.push(script);
    }
  }
}
