import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-daily-mission',
	templateUrl: 'daily-mission.html',
})
export class DailyMissionPage {

	private offers = [];

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController
	) {
	}

	ionViewDidEnter(){
		this.offers = [{
			offerStatus : 'APPLY',
			progress : 70,
			heading : "Sharpen Your Skillz",
			title : "Play <span class='highlight'>6</span> matches in",
			subtitle : "<span class='highlight'>3</span> different arcade games",
			reward : '10',
			currencyType : 'POUND'
		},{
			offerStatus : 'COMPLETED',
			progress : 10,
			heading : "Raise the bar",
			title : "Compete in <span class='highlight'>2</span> contest.",
			subtitle : "Keep within top <span class='highlight'>70</span>%",
			reward : '5',
			currencyType : 'TOKEN_RED'
		},{
			offerStatus : 'ONGOING',
			progress : 50,
			heading : "Go for Gold",
			title : "Play <span class='highlight'>10</span> matches in arcade,",
			subtitle : "<span class='highlight'>3</span> Replays and <span class='highlight'>2</span> contest.",
			reward : '9',
			currencyType : 'TOKEN_SILVER'
		},{
			offerStatus : 'APPLY',
			progress : 90,
			heading : "Go for Gold",
			title : "Play <span class='highlight'>10</span> matches in arcade,",
			subtitle : "<span class='highlight'>3</span> Replays and <span class='highlight'>2</span> contest.",
			reward : '20',
			currencyType : 'POUND'
		},{
			offerStatus : 'ONGOING',
			progress : 50,
			heading : "Go for Gold",
			title : "Play <span class='highlight'>10</span> matches in arcade,",
			subtitle : "<span class='highlight'>3</span> Replays and <span class='highlight'>2</span> contest.",
			reward : '9',
			currencyType : 'TOKEN_SILVER'
		}];
	}

	dismissView(){
		this.view.dismiss();
	}

	ionViewDidLoad() {
	}

}
