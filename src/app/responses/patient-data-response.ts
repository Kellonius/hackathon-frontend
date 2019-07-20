import {Script} from '../models/script';


export class PatientDataResponse {
  firstName: string;
  lastName: string;
  Gender: string;
  AtRisk: string;
  DOB: Date;
  Scripts: Script[];
  PatientId: string;
}
