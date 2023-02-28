import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  title = 'Liste de Pokémons';
  pokemonSelect: string | undefined;
  pokemons: Pokemon[] 

  
  constructor(private router: Router, private pokemonService: PokemonService) {}
  

  ngOnInit(): void {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemons = pokemonList)

  }

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
