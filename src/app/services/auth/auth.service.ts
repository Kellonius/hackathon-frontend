import { Injectable } from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {MedicalProfessional} from '../../models/medical-professional';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: MedicalProfessional;

  constructor(private httpWrapper: HttpClientWrapperService) { }

  login(details): Observable<any> {
    return this.httpWrapper.post(details, 'Users/LoginUser');
  }
}
