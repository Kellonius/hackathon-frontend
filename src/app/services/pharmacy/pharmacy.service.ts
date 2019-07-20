import { Injectable } from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {PatientDataResponse} from '../../responses/patient-data-response';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private httpWrapper: HttpClientWrapperService) {}

  getIncomingPrescriptions(): Observable<void> {
    return this.httpWrapper.get('/patient-detail/');
  }
}
