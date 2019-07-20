import {Component, OnInit} from '@angular/core';
import {PharmacyService} from '../../../services/pharmacy/pharmacy.service';
import {PatientScript} from '../../../models/patient-script';

@Component({
  selector: 'app-outgoing-prescriptions',
  template: `
    <div class="outgoing-prescriptions">
      <div *ngFor="let script of patientScripts; let index = index">
        <mat-card class="mat-elevation-z2 prescription-card"
                  (click)="togglePickedUp(script)"
                  [ngClass]="{'picked-up': isPickedUp(script)}">
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
          <div *ngIf="isPickedUp(script)" class="prescription-picked-up">
            <mat-icon>check_circle_outline</mat-icon>
          </div>
        </mat-card>
      </div>
      <div class="picked-up-prescriptions-section">
        <button class="picked-up-prescriptions-button"
                mat-raised-button color="primary"
                (click)="pickUpPrescriptions()">
          Pick Up Prescriptions
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./outgoing-prescriptions.component.scss']
})
export class OutgoingPrescriptionsComponent implements OnInit {
  patientScripts: PatientScript[] = [];
  pickedUpScripts: PatientScript[] = [];

  constructor(private pharmacyService: PharmacyService) {
  }

  ngOnInit() {
    this.pharmacyService.getOutgoingPrescriptions().subscribe(scripts => {
      this.patientScripts = scripts;
    });
  }

  pickUpPrescriptions() {
    this.pharmacyService.pickUpPrescriptions(this.pickedUpScripts.map(f => f.ScriptId))
      .subscribe(f => {
        this.pharmacyService.getOutgoingPrescriptions().subscribe(scripts => {
          this.patientScripts = scripts;
          this.pickedUpScripts = [];
        });
      });
  }

  isPickedUp(script: PatientScript): boolean {
    return !!this.pickedUpScripts.find(f => f === script);
  }

  togglePickedUp(script: PatientScript) {
    if (this.pickedUpScripts.find(f => f === script)) {
      this.pickedUpScripts = this.pickedUpScripts.filter(f => f !== script);
    } else {
      this.pickedUpScripts.push(script);
    }
  }
}
