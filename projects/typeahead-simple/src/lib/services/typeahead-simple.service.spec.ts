import { TestBed } from '@angular/core/testing';

import { TypeaheadSimpleService } from './typeahead-simple.service';

describe('TypeaheadSimpleService', () => {
  let service: TypeaheadSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeaheadSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
