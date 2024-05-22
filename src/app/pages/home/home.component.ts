import { Component, OnInit } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.charactersService
      .fetchCharacters()
      .subscribe((response) => (this.characters = response.results));
  }
}
