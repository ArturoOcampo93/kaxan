import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContGeneralComponent } from './cont-general.component';

describe('ContGeneralComponent', () => {
  let component: ContGeneralComponent;
  let fixture: ComponentFixture<ContGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
