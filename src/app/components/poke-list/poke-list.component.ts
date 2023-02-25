import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
openDetails($event: MouseEvent) {
throw new Error('Method not implemented.');
}
  caminhoImagemPokemon = "pokemon.status.sprites.versions.generation-v.black-white.animated.front_default";
  allPokemonsList: any;
  constructor(private pokeService: PokemonService) {
   }

  ngOnInit(): void {
    this.pokeService.pokemons.subscribe(
      response =>{
        this.allPokemonsList = response.results;
      }
    )
  }
  getSearch(event: string){

  }
}
