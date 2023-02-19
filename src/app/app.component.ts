import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `
    <h1>
        Welcome to {{title}}!
    </h1>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Liste de Pokémons';

  pokemons: Pokemon[] = POKEMONS
  ngOnInit(): void {
    console.table(this.pokemons)
    this.selectPokemon(this.pokemons[0])
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur  le pokémon ${pokemon.name}`)
  }
}
