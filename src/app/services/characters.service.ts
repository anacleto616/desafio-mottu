import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '@models/api-result.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  fetchCharacters(characterName?: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${this.apiUrl}/?name=${characterName ? characterName : ''}`);
  }
}
