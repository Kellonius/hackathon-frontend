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

  getMedicalProfessionalInformation(email: string): Observable<MedicalProfessionalResponse> {
    return this.httpWrapper.get('/MedicalProfessionals/GetMedicalProfessionalData?userEmail=' + email);
  }

  getMedicalProfessionalPatientInformation(email: string): Observable<PatientDataResponse[]> {
    return this.httpWrapper.get<PatientDataResponse[]>('MedicalProfessionals/GetPatientsForMP?userEmail=joe.doctor@stf.com');
  }

  getMP() {
    return this.httpWrapper.get('MedicalProfessionals/GetPatientsForMP?userEmail=joe.doctor@stf.com');
  }

  updateDetails(mp: MedicalProfessionalResponse) {
    this.httpWrapper.put(mp, '/medical-professional/');
  }

  getNonpatientsForMP(): Observable<PatientDataResponse[]>  {
    return this.httpWrapper.get('MedicalProfessionals/GetExistingNewPatientsForMP?userEmail=joe.doctor@stf.com');
  }

  addPatientToMP(mpId: number, patientId: number) {
    return this.httpWrapper.post({}, 'MedicalProfessionals/AssignPatientToMp?medicalProfessionalId=' + mpId + '&patientId=' + patientId);
  }
}
