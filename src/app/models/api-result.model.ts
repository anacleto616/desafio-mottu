import { Character } from './character.model';
import { Info } from './info.model';

export interface ApiResult {
  info: Info;
  results: Character[];
}
