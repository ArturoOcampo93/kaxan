import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHistorialComponent } from './dashboard-historial.component';

describe('DashboardHistorialComponent', () => {
  let component: DashboardHistorialComponent;
  let fixture: ComponentFixture<DashboardHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
