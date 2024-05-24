import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '@models/character.model';
import { FavoriteCharacterService } from '@services/favorite-character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit, OnDestroy {
  titleNotFound = 'Parece que você ainda não tem favoritos';
  subtitleNotFound = 'Volte à página inicial e escolha os melhores para você.';

  favorites: Character[] = [];
  private favoritesSubscription!: Subscription;

  constructor(private favoriteCharactersService: FavoriteCharacterService) {}

  ngOnInit(): void {
    this.loadFavorites();
    this.favoritesSubscription = this.favoriteCharactersService.favoritesChanged.subscribe(() => {
      this.loadFavorites();
    });
  }

  loadFavorites(): void {
    this.favorites = this.favoriteCharactersService.fetchFavorites();
  }

  ngOnDestroy(): void {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }
}
