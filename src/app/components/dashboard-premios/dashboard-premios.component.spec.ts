import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPremiosComponent } from './dashboard-premios.component';

describe('DashboardPremiosComponent', () => {
  let component: DashboardPremiosComponent;
  let fixture: ComponentFixture<DashboardPremiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPremiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
