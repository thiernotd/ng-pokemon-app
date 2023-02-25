import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

const routes: Routes = [
  { path: 'pokemons',component: ListPokemonComponent},
  { path: 'pokemon/:id',component: DetailPokemonComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}, 
  {path: '**', component: PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
