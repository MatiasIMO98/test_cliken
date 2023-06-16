import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    const url = 'https://pokeapi.co/api/v2/pokemon'; // Reemplaza con la URL de tu API
    return this.http.get(url);
  }
  
}
