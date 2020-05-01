import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledCapacityComponent } from './installed-capacity.component';

describe('InstalledCapacityComponent', () => {
  let component: InstalledCapacityComponent;
  let fixture: ComponentFixture<InstalledCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalledCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalledCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
