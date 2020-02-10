import { TestBed } from '@angular/core/testing';

import { GestionarCarouselService } from './gestionar-carousel.service';

describe('GestionarCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarCarouselService = TestBed.get(GestionarCarouselService);
    expect(service).toBeTruthy();
  });
});
