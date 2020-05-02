import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictDemandFiftyYearsComponent } from './predict-demand-fifty-years.component';

describe('PredictDemandFiftyYearsComponent', () => {
  let component: PredictDemandFiftyYearsComponent;
  let fixture: ComponentFixture<PredictDemandFiftyYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictDemandFiftyYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictDemandFiftyYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
