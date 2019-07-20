import { Component, OnInit } from '@angular/core';
import { MedicalProfessionalService } from '../../services/medical-professional/medical-professional.service';
import { MedicalProfessional } from '../../models/medical-professional';

@Component({
  selector: 'app-medical-professional-detail-page',
  templateUrl: './medical-professional-detail-page.component.html',
  styleUrls: ['./medical-professional-detail-page.component.sass']
})
export class MedicalProfessionalDetailPageComponent implements OnInit {
  medicalProfessional: MedicalProfessional;

  constructor(private mpService: MedicalProfessionalService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.mpService.getMedicalProfessionalInformation(1).subscribe(() => {

    });
  }
}
