import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { DishdetailPage } from '../dishdetail/dishdetail';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  dishes: Dish[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dishService: DishProvider,
    @Inject("DbURL") private dbURL
    ) {
  }

  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()
    .subscribe(
      response =>{
        this.dishes= response[0];
      console.log(this.dishes);
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit(){
    this.getFeaturedDish();
  }

  dishDetails(event, dish){
    this.navCtrl.push(DishdetailPage,{dish:dish});
  }
}
