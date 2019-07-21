import { Injectable } from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {PatientDataResponse} from '../../responses/patient-data-response';
import {MedicationModel} from '../../models/medication.model';
import {Script} from '../../models/script';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private httpWrapper: HttpClientWrapperService) {}

  getPatientDetailInformation(id: number): Observable<PatientDataResponse> {
    return this.httpWrapper.get('Patient/GetPatientDataById?patientId=' + id);
  }

  getPatientMedications(id: number): Observable<Script[]> {
    return this.httpWrapper.post({patientId: id}, 'Medication/GetMedications');
  }

  searchPatients(terms: string): Observable<PatientDataResponse[]> {
    return this.httpWrapper.get<PatientDataResponse[]>('Patient/SearchPatients?terms=' + terms);
  }

  searchForPatientDetails(term): Observable<PatientDataResponse[]> {
    return this.httpWrapper.get('Patient/SearchPatients?terms=' + term);
  }

  getPatientMeds(row) {

  }
}
