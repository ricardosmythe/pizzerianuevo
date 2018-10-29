import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../providers/dish/dish';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites : Array<any>;


  constructor(public http: HttpClient, public dishProvider: DishProvider) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addToFavorites(id:number) :boolean{
    if (!this.isFavorite(id)){
      this.favorites.push(id);
    }
    return true;
  }

  isFavorite(id:number): boolean{
    return this.favorites.some(dish => dish==id)
  }

  getFavorites(): Observable<Dish[]>{
    console.log(this.favorites);
    return this.dishService.getDishes().map(
      res => res.filter(dishes => this.favorites.some=> (dish => dish == dishes id
        )
    )
  }

  deleteFavorites(){

  }

}
