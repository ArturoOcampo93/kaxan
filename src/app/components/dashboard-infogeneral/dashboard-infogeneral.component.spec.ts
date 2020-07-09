import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfogeneralComponent } from './dashboard-infogeneral.component';

describe('DashboardInfogeneralComponent', () => {
  let component: DashboardInfogeneralComponent;
  let fixture: ComponentFixture<DashboardInfogeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInfogeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInfogeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
