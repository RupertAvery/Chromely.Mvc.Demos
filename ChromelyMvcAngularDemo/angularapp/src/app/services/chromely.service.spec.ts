import { TestBed, inject } from '@angular/core/testing';

import { ChromelyService } from './chromely.service';

describe('RegisteredJsObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChromelyService]
    });
  });

  it('should be created', inject([ChromelyService], (service: ChromelyService) => {
    expect(service).toBeTruthy();
  }));
});
