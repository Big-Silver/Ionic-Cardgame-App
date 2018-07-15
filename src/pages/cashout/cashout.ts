import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Range, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-cashout',
	templateUrl: 'cashout.html',
})
export class CashoutPage {

	private currentBalance = '15.00';
	private remainingBalance : any = '15.00';

	private withDrawable = '15.00';
	private resultCoins = 0;

	private sliderModel = 0;

	@ViewChild('range') rangeSlider : Range;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController
	) {
		this.remainingBalance = this.currentBalance;
	}

	ionViewDidLoad(){

	}

	goBack(){
		this.view.dismiss();
	}

	ionViewDidEnter(){}

	sliderChanged(value){

		if(value == 0){
			this.resultCoins = 0;
			this.remainingBalance = this.currentBalance;
			return;
		}

		let progressPercentage = Math.floor((value*100)/parseFloat(this.currentBalance));
		let perInc = 0;

		if(progressPercentage >= 10 && progressPercentage < 40){
			perInc = 5;
		}else if(progressPercentage >= 40 && progressPercentage < 70){
			perInc = 10;
		}else if(progressPercentage >= 70 && progressPercentage < 100){
			perInc = 15;
		}else if(progressPercentage > 99){
			perInc = 20;
		}

		this.remainingBalance = parseInt(this.currentBalance) - parseInt(value);
		this.remainingBalance = parseFloat(this.remainingBalance).toFixed(2)+'';

		this.resultCoins = Math.floor((value * 50) + (perInc*100/(value * 50)));



	}

}