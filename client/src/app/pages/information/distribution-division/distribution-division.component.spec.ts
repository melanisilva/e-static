import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionDivisionComponent } from './distribution-division.component';

describe('DistributionDivisionComponent', () => {
  let component: DistributionDivisionComponent;
  let fixture: ComponentFixture<DistributionDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
