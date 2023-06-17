import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.getList()
      .subscribe( response => {
        console.log( response );
      });
  }

}
