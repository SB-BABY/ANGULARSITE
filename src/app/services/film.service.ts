import { Injectable } from '@angular/core';
import { FilmModel } from '../models/film.model';
import { FilmsConst } from '../const/films.const';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private _filmsApp: FilmModel[] = FilmsConst;

  private _searchString: string = ''
  constructor() { }

  public get getFullFilms(): FilmModel[] {
    return this._filmsApp
  }

  public get filteredFilms(): FilmModel[]{
    return this._filmsApp.filter((item) => item.title.includes(this._searchString))
  }

  public get searchString(): string{
    return this._searchString
  }

  public set searchString(value: string){
    this._searchString = value
  }
}
