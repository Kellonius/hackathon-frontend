import { Injectable } from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {PatientDataResponse} from '../../responses/patient-data-response';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private httpWrapper: HttpClientWrapperService) {}

  getPatientDetailInformation(id: number): Observable<PatientDataResponse> {
    return this.httpWrapper.get('/patient-detail/' + id);
  }

  searchPatients(terms: string): Observable<PatientDataResponse[]> {
    return this.httpWrapper.get<PatientDataResponse[]>('Patient/SearchPatients?terms=' + terms);
  }
}
