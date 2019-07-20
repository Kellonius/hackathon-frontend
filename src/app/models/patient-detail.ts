import {Medication} from './medication';

export class PatientDetail {
  id: number;
  firstName: string;
  lastName: string;
  medications: Medication[];
}
