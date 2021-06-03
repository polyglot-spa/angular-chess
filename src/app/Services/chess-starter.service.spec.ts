import { TestBed } from '@angular/core/testing';

import { ChessStarterService } from './chess-starter.service';

describe('ChessStarterService', () => {
  let service: ChessStarterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessStarterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
