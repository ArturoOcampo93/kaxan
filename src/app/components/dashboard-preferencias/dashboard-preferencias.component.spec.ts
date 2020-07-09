import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPreferenciasComponent } from './dashboard-preferencias.component';

describe('DashboardPreferenciasComponent', () => {
  let component: DashboardPreferenciasComponent;
  let fixture: ComponentFixture<DashboardPreferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPreferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPreferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
