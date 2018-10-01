import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DishProvider } from '../../providers/dish/dish';

import { Dish } from '../../shared/dish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

	dish: Dish;

  constructor(
  public navCtrl: NavController,
  private dishService: DishProvider,
  private leaderService: LeaderProvider,
  private promotionService: PromotionProvider,
  @Inject("DbURL") private dbURL
  ) {

  }

ngOnInit(){
	this.getFeaturedDish();
	this.getFeaturedPromotion();
	this.getFeaturedLeader();
}

getFeaturedDish(){
	this.dishService
	.getFeaturedDish()
	.suscribe(
		response => {
		this.dish = response[0];
		console.log(this.dish);
		},
		error => {
		console.log(error);
		}
	);
}
}


