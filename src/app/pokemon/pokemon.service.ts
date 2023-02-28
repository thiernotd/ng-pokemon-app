import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  // getPokemonList(): Pokemon[] {
  //   return POKEMONS;
  // }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handError(error, []))
    );
  }

  // getPokemonById(pokemonId: number): Pokemon | undefined {
  //   return POKEMONS.find(pokemon => pokemon.id = pokemonId);
  // }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined >{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handError(error, undefined))
    )
  }
  private log(response: any) {
    console.table(response)
  }
  
  private handError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Comba', 'Psy'];
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
       catchError((error) => this.handError(error, null)
      ))
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((pokemon: Pokemon) => this.log(pokemon)),
       catchError((error) => this.handError(error, null)
      ))
  }

  deletePokemonById(pokemonId: number ): Observable<null> {
    return this.http.delete<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handError(error, undefined))
    )
  }
}

