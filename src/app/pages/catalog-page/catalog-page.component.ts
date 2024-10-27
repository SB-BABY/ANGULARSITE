import { Component } from '@angular/core';
import { FilmModel } from '../../models/film.model';
import { FilmsConst } from '../../const/films.const';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  // public filmsPage: FilmModel[] = FilmsConst;

  constructor(
    private _filmsServices: FilmService,
  ){}

  public get filmsPage(): FilmModel[] {
    return this._filmsServices.filteredFilms
  }
}
