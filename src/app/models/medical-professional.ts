export class MedicalProfessional {
    id: number;
    firstName: string;
    lastName: string;
    email: string;


    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
