import {Component, OnInit} from '@angular/core';
import {MedicalProfessionalResponse} from 'src/app/responses/medical-professional-response';
import {FormGroup} from '@angular/forms';
import {APIService} from '../../services/medical-professional/api.service';
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

  constructor(private mpService: APIService, private authService: AuthService) {
    this.email = this.authService.loggedInUser.email;
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.mpService.getMedicalProfessionalInformation(this.email).subscribe(data => {

      this.medicalProfessional = data;
    });
  }

  getMPAndPatientInfo() {

  }

  updateDetails() {
    this.mpService.updateDetails(this.medicalProfessional);
  }
}
