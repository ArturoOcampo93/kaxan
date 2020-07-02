import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContHorizontalComponent } from './cont-horizontal.component';

describe('ContHorizontalComponent', () => {
  let component: ContHorizontalComponent;
  let fixture: ComponentFixture<ContHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
