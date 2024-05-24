import { Component, Input } from '@angular/core';
import { Character } from '@models/character.model';
import { FavoriteCharacterService } from '@services/favorite-character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input({ required: true }) character!: Character;
  @Input() isFavorite: boolean = false;

  constructor(public favoriteCharacterService: FavoriteCharacterService) {}

  toggleFavorite(character: Character) {
    if (this.favoriteCharacterService.isFavorite(character)) {
      this.favoriteCharacterService.deleteFavorite(character);
      this.isFavorite = false;
      return;
    }

    this.favoriteCharacterService.addFavorite(character);
    this.isFavorite = true;
  }
}
