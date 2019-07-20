import {Medication} from '../models/medication';


export class PatientDataResponse {
  firstName: string;
  lastName: string;
  Gender: string;
  DOB: Date;
  medications: Medication[];
}
