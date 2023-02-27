import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorederCardDirective } from './boreder-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';


const pokemonroutes: Routes = [
  { path: 'pokemons',component: ListPokemonComponent},
  { path: 'pokemon/:id',component: DetailPokemonComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}
 
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorederCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
