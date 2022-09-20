import { TestBed } from '@angular/core/testing';

import { SongapiService } from './songapi.service';

describe('SongapiService', () => {
  let service: SongapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
