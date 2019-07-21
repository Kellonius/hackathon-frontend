import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicIshComponent } from './epic-ish.component';

describe('EpicIshComponent', () => {
  let component: EpicIshComponent;
  let fixture: ComponentFixture<EpicIshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicIshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicIshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
