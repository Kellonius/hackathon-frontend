import { TestBed } from '@angular/core/testing';

import { MedicalProfessionalService } from './medical-professional.service';

describe('MedicalProfessionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalProfessionalService = TestBed.get(MedicalProfessionalService);
    expect(service).toBeTruthy();
  });
});
