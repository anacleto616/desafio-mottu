import { Injectable } from '@angular/core';
import { Character } from '@models/character.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCharacterService {
  private favorites: Character[] = [];
  favoritesChanged = new Subject<void>();

  fetchFavorites(): Character[] {
    return [...this.favorites];
  }

  addFavorite(character: Character): void {
    this.favorites.push(character);
    this.favoritesChanged.next();
  }

  deleteFavorite(character: Character): void {
    this.favorites = this.favorites.filter((fav) => fav.id !== character.id);
    this.favoritesChanged.next();
  }

  isFavorite(character: Character): boolean {
    return this.favorites.some((fav) => fav.id === character.id);
  }

  getFavoritesCount(): number {
    const favorites = this.fetchFavorites();
    return favorites.length;
  }
}
