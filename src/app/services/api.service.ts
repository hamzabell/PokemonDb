import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient)  { }

  getAllPokemons() {
    return this.http.get(this.apiUrl);
  }
  getPokemon(url) {
    return this.http.get(url);
  }
  getTypes(){
    return this.http.get('https://pokeapi.co/api/v2/type');
  }
  getTypeInfo(url){
    return this.http.get(url);
  }
}
