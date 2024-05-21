import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  fetchCharacters() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.get<any>(this.apiUrl);
  }
}
