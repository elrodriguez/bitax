import { TestBed } from '@angular/core/testing';

import { CreateCodeService } from './create-code.service';

describe('CreateCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCodeService = TestBed.get(CreateCodeService);
    expect(service).toBeTruthy();
  });
});
