import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetails/:id', component: PokeDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
