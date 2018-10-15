import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../shared/dish';


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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    @Inject('DbURL')private DbURL
) {
    this.dish = this.navParams.get('dish');
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

}
