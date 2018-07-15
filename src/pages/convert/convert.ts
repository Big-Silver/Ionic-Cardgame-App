import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ConvertUserCoinsComponent } from '../../components/convert-user-coins/convert-user-coins';
import { ConvertHelperComponent } from '../../components/convert-helper/convert-helper';
import { ConvertRangeSliderComponent } from '../../components/convert-range-slider/convert-range-slider';

@Component({
	selector: 'page-convert',
	templateUrl: 'convert.html',
})
export class ConvertPage {

	@ViewChild(ConvertHelperComponent) convertHelper : ConvertHelperComponent;
	@ViewChild(ConvertRangeSliderComponent) convertRangeSlider : ConvertRangeSliderComponent;

	private totalAvailableCoins = 10000;
	private remainingCoins = 0;
	private previousCoinChange = '';

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private statusBar : StatusBar
	) {
		this.remainingCoins = this.totalAvailableCoins;
	}

	ionViewDidLoad() {
	}

	closeModal(){
		this.view.dismiss();
	}

	handleRemainingCoinChange(ev){
		this.remainingCoins = ev;
		if(this.previousCoinChange != "HELPER"){
			this.resetCoinChangeForSlider();
		}
		this.previousCoinChange = "HELPER";
	}

	handleRemainingCoinChangeSlider(ev){
		this.remainingCoins = ev;
		if(this.previousCoinChange != "SLIDER"){
			this.resetCoinChangeForHelper();
		}
		this.previousCoinChange = "SLIDER";
	}

	resetCoinChangeForHelper(){
		if(this.convertHelper){
			this.convertHelper.resetAllTokens();
		}
	}

	resetCoinChangeForSlider(){
		if(this.convertRangeSlider){
			this.convertRangeSlider.reset();
		}
	}

}
