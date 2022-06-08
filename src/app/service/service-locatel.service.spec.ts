import { TestBed } from '@angular/core/testing';

import { ServiceLocatelService } from './service-locatel.service';

describe('ServiceLocatelService', () => {
  let service: ServiceLocatelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLocatelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
