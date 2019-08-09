import { Component, OnInit,  } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StatsDialogComponent } from 'src/app/modals/stats-dialog/stats-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: APIService, private dialog: MatDialog) { }
  pokemons: Object;
  singlePokemon: Object;
  id: 1;
  private pageEvent: Event;
  types : Object;
  selected: '';
  private currentIndex: Number;
  public keyword: '';
  private url: 'https://pokeapi.co/api/v2/pokemon/';
  ngOnInit() {
    this.currentIndex = 0;
    let response = {  }
    this.api.getTypes().subscribe(data => {
      this.types = data;
    } );
    
    this.getPokemons().subscribe(data => {
      this.formatSubscribeResponse(data);
    }) 
  }

  getPokemons() {
    return this.api.getAllPokemons();
  }

  getInfo(){
    let response = {'count': 0, 'previous': null, 'next': null}
    this.api.getTypeInfo(this.selected).subscribe(data => {
      const responseData = [];
      data['pokemon'].forEach(pokemon => {
        this.api.getPokemon(pokemon.pokemon.url).subscribe(data => {
          responseData.push(data);
        })
      })
      response['data'] = responseData;
    });
    this.pokemons = response;
  }
  formatSubscribeResponse(data){
    let response = {};
    const count = data['count'];
    const next = data['next'];
    const previous = data['previous'];
    const results = data['results'];
    response = { count, next, previous }
    const responseData = [];
    results.forEach(item => {
      this.api.getPokemon(item.url).subscribe(data => {
        responseData.push(data);
      })
    });
    response['data'] = responseData;
    this.pokemons = response;

  }

  getItems(url){
    this.api.getPokemon(url).subscribe(data => {
      this.formatSubscribeResponse(data);
    })
  }

  getSingleItem(id){
    let newUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    this.api.getPokemon(newUrl).subscribe(data => {
      this.singlePokemon = data;
    });
  }

  reloadPaginatedItems() {
    if (this.currentIndex < this.pageEvent['pageIndex']) { 
      this.currentIndex = this.pageEvent['pageIndex'];
      this.getItems(this.pokemons['next']);
    } else {
      this.currentIndex = this.pageEvent['pageIndex'];
      this.getItems(this.pokemons['previous']);
    }
  }
openDialog(id){
  this.getSingleItem(id);
  if (this.singlePokemon) {
    let data = { sprites: this.singlePokemon['sprites'], stats: this.singlePokemon['stats'], base_experience: this.singlePokemon['base_experience'] };
    this.dialog.open(StatsDialogComponent, {
      height: '650px',
      width: '700px',
      data: data,
    });
  }
}
reload(): void {
  window.location.reload();
}

}

