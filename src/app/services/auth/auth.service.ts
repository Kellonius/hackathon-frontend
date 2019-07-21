import { Injectable } from '@angular/core';
import {HttpClientWrapperService} from '../http-wrapper.service';
import {Observable} from 'rxjs';
import {MedicalProfessional} from '../../models/medical-professional';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loggedInUser: MedicalProfessional;

  constructor(private httpWrapper: HttpClientWrapperService) {

    // leave uncommented to fake a user so you don't have to login each refresh
   this.fakeLogin();
  }

  login(details): Observable<any> {
    return this.httpWrapper.post(details, 'Users/LoginUser');
  }


  fakeLogin() {
    const user = new MedicalProfessional();
    user.id = 54;
    user.Email = 'joe.doctor@stf.com';
    user.firstName = 'Joe';
    user.lastName = 'Doctor';
    this.loggedInUser = user;
  }
}
