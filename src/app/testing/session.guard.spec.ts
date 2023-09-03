import { TestBed } from '@angular/core/testing';
import { SessionGuard } from '../core/guards/session.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionGuard', () => {
  let guard: SessionGuard; // instance constant 4 SessionGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(SessionGuard); // get SessionGuard instance from the inyector
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
