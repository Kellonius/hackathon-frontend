import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProfessionalPatientListComponent } from './medical-professional-patient-list.component';

describe('MedicalProfessionalPatientListComponent', () => {
  let component: MedicalProfessionalPatientListComponent;
  let fixture: ComponentFixture<MedicalProfessionalPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProfessionalPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProfessionalPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
