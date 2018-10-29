import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite';


/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {

  dish : Dish;
  numComments : number;
  averageRat : string;
  favorite : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private favoriteService: FavoriteProvider,
    @Inject('DbURL')private DbURL
) {
   

    this.dish = this.navParams.get('dish');
    this.favorite = this.favoriteService.isFavorite(this.dish.id);
    console.log(this.dish)
    this.numComments = this.dish.comments.length;

    let total = 0;
    this.dish.comments.forEach(
      comment => {
        total += comment.rating
      }
    );
    this.averageRat = (total/this.numComments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites(){
    this.favoriteService.addToFavorites(this.dish.id);
    this.favorite = this.favoriteService.isFavorite(this.dish.id);
  }

}
