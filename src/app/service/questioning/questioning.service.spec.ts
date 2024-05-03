import { TestBed } from '@angular/core/testing';

import { QuestioningService } from './questioning.service';

describe('QuestioningService', () => {
  let service: QuestioningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestioningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
