import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictDemandPageComponent } from './predict-demand-page.component';

describe('PredictDemandPageComponent', () => {
  let component: PredictDemandPageComponent;
  let fixture: ComponentFixture<PredictDemandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictDemandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictDemandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
