import {Medication} from './medication';

export class PatientData {
  id: number;
  firstName: string;
  lastName: string;
  medications: Medication[];
}
