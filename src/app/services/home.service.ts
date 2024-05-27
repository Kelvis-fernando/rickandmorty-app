import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterList } from '../interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CharacterList> {
    return this.http.get<CharacterList>(this.url);
  }
}
