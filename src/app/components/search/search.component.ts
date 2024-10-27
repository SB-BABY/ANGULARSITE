import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchStringComp: string = ''

  constructor(private _filmsServices: FilmService,){

  }

  public updateValue(event: Event){
    const target = event.target as HTMLInputElement

    this.searchStringComp = target.value
  }

  public updateSearch(event: Event){
    this._filmsServices.searchString = this.searchStringComp
  }

}
