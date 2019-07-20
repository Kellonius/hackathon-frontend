import { Injectable } from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {PatientDetailResponse} from '../../responses/patient-detail-response';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {

  constructor(private httpWrapper: HttpClientWrapperService) {}

  getPatientDetailInformation(id: number): Observable<PatientDetailResponse> {
    return this.httpWrapper.get('/patient-detail/' + id);
  }
}
