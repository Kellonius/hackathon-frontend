import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProfessionalDetailPageComponent } from './medical-professional-detail-page.component';

describe('MedicalProfessionalDetailPageComponent', () => {
  let component: MedicalProfessionalDetailPageComponent;
  let fixture: ComponentFixture<MedicalProfessionalDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProfessionalDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProfessionalDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
