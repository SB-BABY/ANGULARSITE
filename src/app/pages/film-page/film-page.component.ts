import { Component, OnInit } from '@angular/core';
import { FilmModel } from '../../models/film.model';
import { FilmsConst } from '../../const/films.const';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {
  public filmPage: FilmModel[] = []

  public film!: FilmModel

  constructor(
    private _route: ActivatedRoute,

    private _routerLink: Router,

    private _filmsServices: FilmService,
  ){
    
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')

    this.filmPage = this._filmsServices.getFullFilms;
    
    this._initFilm(Number(id))
  }

  private _initFilm(id: number){
    const findFilm = this.filmPage.find(film => film.id === id)

    if(findFilm){
      this.film = findFilm
    } else {
      this._routerLink.navigate(['/'])
    }
  }
}
