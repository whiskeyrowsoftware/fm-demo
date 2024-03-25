import { TestBed } from '@angular/core/testing';

import { OpenAiDataService } from './open-ai.service';

describe('OpenAiService', () => {
  let service: OpenAiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
