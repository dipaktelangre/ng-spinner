import { TestBed } from '@angular/core/testing';

import { NgSpinnerService } from './ng-spinner.service';

describe('NgSpinnerService', () => {
  let service: NgSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
