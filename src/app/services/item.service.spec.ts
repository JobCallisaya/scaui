import {inject, TestBed} from '@angular/core/testing';

import {AccidenteService} from './accidente.service';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidenteService]
    });
  });

  it('should be created', inject([AccidenteService], (service: AccidenteService) => {
    expect(service).toBeTruthy();
  }));
});
