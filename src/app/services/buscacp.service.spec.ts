import { TestBed } from '@angular/core/testing';

import { BuscacpService } from './buscacp.service';

describe('BuscacpService', () => {
  let service: BuscacpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscacpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
