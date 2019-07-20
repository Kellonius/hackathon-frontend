import { Component, OnInit } from '@angular/core';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import {FormControl, FormGroup} from '@angular/forms';
import {APIService} from '../../services/medical-professional/api.service';

@Component({
  selector: 'app-medical-professional-detail-page',
  templateUrl: './medical-professional-detail-page.component.html',
  styleUrls: ['./medical-professional-detail-page.component.scss']
})
export class MedicalProfessionalDetailPageComponent implements OnInit {
  medicalProfessional: MedicalProfessionalResponse;
  formGroup: FormGroup;

  constructor(private mpService: APIService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.medicalProfessional = this.mpService.getMedicalProfessionalInformation(1);
  }

  getMPAndPatientInfo() {

  }

  updateDetails() {
    this.mpService.updateDetails(this.medicalProfessional);
  }
}
