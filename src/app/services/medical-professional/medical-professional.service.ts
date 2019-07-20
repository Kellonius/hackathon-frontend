import { Injectable } from '@angular/core';
import { HttpClientWrapperService } from '../http-wrapper.service';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalProfessionalService {

  constructor(private httpWrapper: HttpClientWrapperService) { }

  getMedicalProfessionalInformation(id: number): MedicalProfessionalResponse {
     return {
        name: 'string',
        contactInformation: ['1', '2']
      };
    // return this.httpWrapper.get('/medical-professional/' + id);
  }
}
