import { Injectable } from '@angular/core';
import { HttpClientWrapperService } from '../http-wrapper.service';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalProfessionalService {

  constructor(private httpWrapper: HttpClientWrapperService) { }

  getMedicalProfessionalInformation(id: number): Observable<MedicalProfessionalResponse> {
    return this.httpWrapper.get('/medical-professional/' + id);
  }
}
