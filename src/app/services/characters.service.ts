import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from '../models/api-result.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  fetchCharacters(): Observable<ApiResult> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.get<ApiResult>(this.apiUrl);
  }
}
