import { TestBed } from '@angular/core/testing';

import { FavoriteCharacterService } from './favorite-character.service';

describe('FavoriteCharacterService', () => {
  let service: FavoriteCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
