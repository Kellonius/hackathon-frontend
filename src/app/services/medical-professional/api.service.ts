import { Injectable } from '@angular/core';
import { HttpClientWrapperService } from '../http-wrapper.service';
import { MedicalProfessionalResponse } from 'src/app/responses/medical-professional-response';
import { Observable } from 'rxjs';
import {MedicalProfessional} from '../../models/medical-professional';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpWrapper: HttpClientWrapperService) { }

  getMedicalProfessionalInformation(id: number): MedicalProfessionalResponse {
     return {
      name: 'MP-Name',
      email: 'mpemail@test.com',
      phoneNumber: '867-5309',
      address: '123 Easy Street'
      };
    // return this.httpWrapper.get('/medical-professional/' + id);
  }

  updateDetails(mp: MedicalProfessionalResponse) {
    this.httpWrapper.put(mp, '/medical-professional/');
  }
}
