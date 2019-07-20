import { Component, OnInit } from '@angular/core';
import { MedicalProfessionalService } from '../../services/medical-professional/medical-professional.service';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-medical-professional-detail-page',
  templateUrl: './medical-professional-detail-page.component.html',
  styleUrls: ['./medical-professional-detail-page.component.scss']
})
export class MedicalProfessionalDetailPageComponent implements OnInit {
  medicalProfessional: MedicalProfessionalResponse;
  formGroup: FormGroup;

  constructor(private mpService: MedicalProfessionalService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.medicalProfessional = this.mpService.getMedicalProfessionalInformation(1);
  }
}
