import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  titleNotFound = 'Parece que você ainda não tem favoritos';
  subtitleNotFound = 'Volte à página inicial e escolha os melhores para você.';
}
