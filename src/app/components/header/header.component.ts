import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteCharacterService } from '@services/favorite-character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  readonly logo = '../../../assets/logo.png';
  favoritesCount: number = 0;

  constructor(
    private router: Router,
    private favoriteCharacterService: FavoriteCharacterService,
  ) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoriteCharacterService.getFavoritesCount();
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToFavorites() {
    this.router.navigate(['favorites']);
  }
}
