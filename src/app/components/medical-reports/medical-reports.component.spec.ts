import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReportsComponent } from './medical-reports.component';

describe('MedicalReportsComponent', () => {
  let component: MedicalReportsComponent;
  let fixture: ComponentFixture<MedicalReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
