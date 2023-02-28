import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorederCardDirective } from './boreder-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';


const pokemonroutes: Routes = [
  { path: 'edit/pokemon/:id',component: EditPokemonComponent},
  { path: 'pokemon/add',component: AddPokemonComponent},
  { path: 'pokemons',component: ListPokemonComponent},
  { path: 'pokemon/:id',component: DetailPokemonComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}
 
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorederCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
