import { TestBed } from '@angular/core/testing';

import { ShortnameService } from './shortname.service';

describe('ShortnameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortnameService = TestBed.get(ShortnameService);
    expect(service).toBeTruthy();
  });
});
