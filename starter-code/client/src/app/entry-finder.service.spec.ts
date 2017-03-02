import { TestBed, inject } from '@angular/core/testing';

import { EntryFinderService } from './entry-finder.service';

describe('EntryFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryFinderService]
    });
  });

  it('should ...', inject([EntryFinderService], (service: EntryFinderService) => {
    expect(service).toBeTruthy();
  }));
});
