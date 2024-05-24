import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Character } from '@models/character.model';
import { CharactersService } from '@services/characters.service';
import { FavoriteCharacterService } from './../../services/favorite-character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  titleNotFound = 'Nada foi encontrado';
  subtitleNotFound = 'Tente realizar uma nova busca.';
  characterName!: string;
  notFoundCharacter = false;

  constructor(private charactersService: CharactersService) {}

  favoriteCharacterService = inject(FavoriteCharacterService);

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.charactersService.fetchCharacters().subscribe((response) => {
      this.characters = response.results;
      this.notFoundCharacter = this.characters.length === 0;
    });
  }

  searchCharacter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const characterName = inputElement.value;

    if (characterName) {
      this.charactersService.fetchCharacters(characterName).subscribe({
        next: (response) => {
          this.characters = response.results;
          this.notFoundCharacter = this.characters.length === 0;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.characters = [];
          this.notFoundCharacter = true;
        },
      });

      return;
    }

    this.loadCharacters();
  }
}
