import { Injectable } from '@angular/core';
import { HttpClientWrapperService } from '../http-wrapper.service';
import { MonthlyReport } from 'src/app/models/monthly-report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalReportsService {

  constructor(private httpWrapper: HttpClientWrapperService) { }

  getMPInformation(): Observable<MonthlyReport[]> {
    return this.httpWrapper.get('Medication/UnpickedUpPrescriptionsByMonth');
  }
}
