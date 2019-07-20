export class MedicalProfessionalResponse{
    Address: string;
    MPId: number
    Phone: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    fullname: string = this.firstName + ' ' + this.lastName;
  }
