import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FetchAllPokemonResponse, Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }

  getList() {
    return this.http.get<FetchAllPokemonResponse>(`${ this.url }/pokemon?limit=1500`)
      .pipe(
        map( this.infoPokemon )
      )
  }

  private infoPokemon( resp: FetchAllPokemonResponse ) {

    const pokemonList: Pokemon[] = resp.results.map( poke => {

      const urlArreglo = poke.url.split('/');
      const id = urlArreglo[6];
      // console.log(urlArreglo);

      const pokepoke = this.http.get<FetchAllPokemonResponse>(`${ this.url }/pokemon/`+id)
        .pipe(
          map( this.infoPokemon )
        )

      return {
        id: id,
        name: poke.name,
        height: 0,
        weight: 0,
        sprites: []
      }

    })

    return ['hola mundo'];
  }

}
