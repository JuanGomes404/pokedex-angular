import { Router } from '@angular/router';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss'],
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['pos', 'img', 'nome'];
  data: any[] = [];
  dataSource = new MatTableDataSource(this.data);
  pokemons = [];


  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getColuna(row: any){
    this.router.navigateByUrl(`pokeDetails/${row.pos}`);
  }
  getPokemons() {
    let pokemonData;
    //Nessa pokedex, os pokémons só serão exibidos até a 5º geração na tabela

    for (let i = 1; i <= 649; i++) {
      this.pokeService.getPokemons(i).subscribe(
        (res) => {
          pokemonData = {
            pos: i,
            img: res.sprites.front_default,
            nome: res.name
          };
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;

        },
        (err) => {

        }
      );
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
}
