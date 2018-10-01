import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';
import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

	dish: Dish;
	promotion: Promotion;
	leader: Leader;

  constructor(
  public navCtrl: NavController,
  private dishService: DishProvider,
  private leaderService: LeaderProvider,
  private promotionService: PromotionProvider,
  @Inject("DbURL") private dbURL
  ) {

  }


  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()
    .subscribe(
      response =>{
        this.dish= response[0];
      console.log(this.dish);
      }
    )
  }

  getFeaturedLeader(){
    this.leaderService
    .getFeaturedLeader()
    .subscribe(
      response =>{
        this.leader= response[0];
      console.log(this.leader);
      }
    )
  }
  getFeaturedPromotion(){
    this.promotionService
    .getFeaturedPromotion()
    .subscribe(
      response =>{
        this.promotion= response[0];
      console.log(this.promotion);
      }
    )
  }

  ngOnInit(){
    this.getFeaturedDish();
    this.getFeaturedLeader();
    this.getFeaturedPromotion();
  }
}


