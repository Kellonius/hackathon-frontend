import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicMedsComponent } from './epic-meds.component';

describe('EpicMedsComponent', () => {
  let component: EpicMedsComponent;
  let fixture: ComponentFixture<EpicMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
