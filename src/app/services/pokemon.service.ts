import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  get pokemons() {
    return this.http.get<any>(`${this.baseUrl}/pokemon?limit=100`).pipe(
      tap((data) => data),
      tap((data) => {
        data.results.map((dataPokemons: any) => {
          this.getPokemon(dataPokemons.url).subscribe(
            (data) => (dataPokemons.status = data)
          );
        });
      })
    );
  }
  getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((data) => data));
  }
  getPokemonById(index: Number) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
