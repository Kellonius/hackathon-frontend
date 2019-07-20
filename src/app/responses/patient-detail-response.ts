import {Medication} from '../models/medication';


export class PatientDetailResponse {
  firstName: string;
  lastName: string;
  medications: Medication[];
}
