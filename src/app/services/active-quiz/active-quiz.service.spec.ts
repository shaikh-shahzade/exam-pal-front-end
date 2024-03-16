import { TestBed } from '@angular/core/testing';

import { ActiveQuizService } from './active-quiz.service';

describe('ActiveQuizService', () => {
  let service: ActiveQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
