import {Injectable} from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {MonthlyReport} from 'src/app/models/monthly-report';
import {Observable} from 'rxjs';
import {YearlyReport} from 'src/app/models/yearly-reports';

@Injectable({
  providedIn: 'root'
})
export class MedicalReportsService {

  constructor(private httpWrapper: HttpClientWrapperService) {
  }

  getMPInformation(): Observable<YearlyReport[]> {
    return this.httpWrapper.get('Medication/UnpickedUpPrescriptionsByYear');
  }

  getMonthlyData(): Observable<MonthlyReport[]> {
    return this.httpWrapper.get('Medication/UnpickedUpPrescriptionsByMonth');
  }
}
