import { TestBed } from '@angular/core/testing';

import { ApiGastosService } from './api-gastos.service';

describe('ApiGastosService', () => {
  let service: ApiGastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
