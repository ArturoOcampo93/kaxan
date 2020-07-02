import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContHorizontalRecomendacionesComponent } from './cont-horizontal-recomendaciones.component';

describe('ContHorizontalRecomendacionesComponent', () => {
  let component: ContHorizontalRecomendacionesComponent;
  let fixture: ComponentFixture<ContHorizontalRecomendacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContHorizontalRecomendacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContHorizontalRecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
