import { Component, OnInit } from '@angular/core';
import { MedicalProfessionalService } from '../../services/medical-professional/medical-professional.service';
import { MedicalProfessional } from '../../models/medical-professional';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';

@Component({
  selector: 'app-medical-professional-detail-page',
  templateUrl: './medical-professional-detail-page.component.html',
  styleUrls: ['./medical-professional-detail-page.component.sass']
})
export class MedicalProfessionalDetailPageComponent implements OnInit {
  medicalProfessional: MedicalProfessionalResponse;

  constructor(private mpService: MedicalProfessionalService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.medicalProfessional = this.mpService.getMedicalProfessionalInformation(1);
  }
}
