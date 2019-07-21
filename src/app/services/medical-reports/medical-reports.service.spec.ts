import { TestBed } from '@angular/core/testing';

import { MedicalReportsService } from './medical-reports.service';

describe('MedicalReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalReportsService = TestBed.get(MedicalReportsService);
    expect(service).toBeTruthy();
  });
});
