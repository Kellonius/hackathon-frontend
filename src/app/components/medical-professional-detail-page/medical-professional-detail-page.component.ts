import {Component, OnInit} from '@angular/core';
import {MedicalProfessionalResponse} from 'src/app/responses/medical-professional-response';
import {FormGroup} from '@angular/forms';
import {MedicalProfessionalService} from '../../services/medical-professional/medical-professional.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-medical-professional-detail-page',
  templateUrl: './medical-professional-detail-page.component.html',
  styleUrls: ['./medical-professional-detail-page.component.scss']
})
export class MedicalProfessionalDetailPageComponent implements OnInit {
  medicalProfessional: MedicalProfessionalResponse;
  email: string;
  formGroup: FormGroup;

  constructor(private mpService: MedicalProfessionalService, private authService: AuthService) {
    this.email = this.authService.loggedInUser.email;
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.mpService.getMPInformation(this.email).subscribe(data => {
      this.medicalProfessional = data;
    });
  }

  updateDetails() {
    this.mpService.updateDetails(this.medicalProfessional);
  }
}
