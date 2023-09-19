import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SignInGuard, isSignInGuard } from './sign-in.guard';

describe('signInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => isSignInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
