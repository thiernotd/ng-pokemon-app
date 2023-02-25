import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  title = 'Liste de Pokémons';
  pokemonSelect: string | undefined;
  pokemons: Pokemon[] = POKEMONS
  ngOnInit(): void {
  }
  constructor(private router: Router) {}

  selectPokemon(pokemonId: string){
    //const index: number = +(event.target as HTMLInputElement).value
    const id = +pokemonId
    const pokemon: Pokemon |undefined = this.pokemons.find(p=>p.id===id)
    this.pokemonSelect = pokemon?.name
    console.log(`Vous avez cliqué sur  le pokémon ${this.pokemonSelect}`)
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon',pokemon.id])
  }

}
