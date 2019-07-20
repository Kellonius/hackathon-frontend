import {Injectable} from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {PatientScript} from '../../models/patient-script';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private httpWrapper: HttpClientWrapperService) {}

  getIncomingPrescriptions(): Observable<PatientScript[]> {
    return this.httpWrapper.get<PatientScript[]>('Medication/GetIncomingPrescriptions');
  }

  getOutgoingPrescriptions(): Observable<PatientScript[]> {
    return this.httpWrapper.get<PatientScript[]>('Medication/GetOutgoingPrescriptions');
  }

  fillPrescriptions(ids: number[]): Observable<void> {
    return this.httpWrapper.post(ids, 'Medication/MarkPrescriptionsAsFilled');
  }

  pickUpPrescriptions(ids: number[]): Observable<void> {
    return this.httpWrapper.post(ids, 'Medication/MarkPrescriptionsAsPickedUp');
  }
}
