import { Component } from '@angular/core';
import { CharactersService } from '@services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private charactersService: CharactersService) {}
}
