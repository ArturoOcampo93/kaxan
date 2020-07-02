import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPagadasComponent } from './promo-pagadas.component';

describe('PromoPagadasComponent', () => {
  let component: PromoPagadasComponent;
  let fixture: ComponentFixture<PromoPagadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoPagadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoPagadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
