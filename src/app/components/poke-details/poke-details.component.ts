import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'poke-pokeDetails',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  pokemon: any = '';
  tipoPokemon: any;
  pokemonImg  = '';
  habilidadesPokemon: any[] = [];

  constructor(private pokeService: PokemonService, private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
   }

  ngOnInit(): void {}
  home(){
    this.router.navigateByUrl("home");
  }
  getPokemon(id: any){
    this.pokeService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.tipoPokemon = res.types[0].type.name;
        this.habilidadesPokemon = res.abilities;
      },
      err =>{
        this.error(err);
      }
    )
  }
  error(erro_ : any){
    alert("Ocorreu um erro: "+erro_);
  }
}
