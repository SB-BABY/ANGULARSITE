import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// массив для перехода на страницу
const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent
  },

  {
    // нужно, чтобы при переходе по фильмы - страницы открывал фильм по id
    path: 'film/:id',
    component: FilmPageComponent
  },

  // Еще один переход, если кто-то ввел неправильный УРЛ, чтобы переходил на страницу not-found
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
