import { Injectable } from '@angular/core';
import { HttpClientWrapperService } from '../http-wrapper.service';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import { Observable } from 'rxjs';
import {MedicalProfessional} from '../../models/medical-professional';
import { PatientDataResponse } from 'src/app/responses/patient-data-response';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpWrapper: HttpClientWrapperService) { }

  getMedicalProfessionalInformation(email: string): MedicalProfessionalResponse {
     return {
      name: 'MP-Name',
      email: 'mpemail@test.com',
      phoneNumber: '867-5309',
      address: '123 Easy Street'
      };
    // var result = this.httpWrapper.get<MedicalProfessionalResponse>('/MedicalProfessionals/GetMedicalProfessionalData?userEmail=joe.doctor@stf.com');
    // console.log(result);
    //  return null;
  }

  getMedicalProfessionalPatientInformation(email: string): Observable<PatientDataResponse[]> {
    return this.httpWrapper.get<PatientDataResponse[]>('MedicalProfessionals/GetPatientsForMP?userEmail=joe.doctor@stf.com');
  }

  updateDetails(mp: MedicalProfessionalResponse) {
    this.httpWrapper.put(mp, '/medical-professional/');
  }
}
