import { Injectable } from '@angular/core';
import { HttpClientWrapperService } from '../http-wrapper.service';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import { Observable } from 'rxjs';
import {MedicalProfessional} from '../../models/medical-professional';
import { PatientDataResponse } from 'src/app/responses/patient-data-response';
import { PatientCreationRequest } from 'src/app/requests/patient-creation-request';

@Injectable({
  providedIn: 'root'
})
export class MedicalProfessionalService {

  constructor(private httpWrapper: HttpClientWrapperService) { }

  getMPInformation(email: string): Observable<MedicalProfessionalResponse> {
    return this.httpWrapper.get('/MedicalProfessionals/GetMedicalProfessionalData?userEmail=' + email);
  }

  getMPPatientInformation(email: string): Observable<PatientDataResponse[]> {
    return this.httpWrapper.get<PatientDataResponse[]>('MedicalProfessionals/GetPatientsForMP?userEmail=' + email);
  }

  updateDetails(mp: MedicalProfessionalResponse) {
    this.httpWrapper.put(mp, '/medical-professional/');
  }

  getNonpatientsForMP(mpEmail: string): Observable<PatientDataResponse[]>  {
    return this.httpWrapper.get('MedicalProfessionals/GetExistingNewPatientsForMP?userEmail=' + mpEmail);
  }

  addPatientToMP(mpId: number, patientId: number) {
    return this.httpWrapper.post({}, 'MedicalProfessionals/AssignPatientToMp?medicalProfessionalId=' + mpId + '&patientId=' + patientId);
  }

  createPatientTiedToMP(request: PatientCreationRequest) {
    return this.httpWrapper.post(request, 'MedicalProfessionals/CreatePatientAndTieToMP');
  }
}
