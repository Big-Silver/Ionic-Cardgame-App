import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Range } from 'ionic-angular';

@Component({
	selector: 'convert-range-slider',
	templateUrl: 'convert-range-slider.html'
})
export class ConvertRangeSliderComponent {

	private totalTokens = 2000;
	private convertableTokens = 0;
	private conversionRate = 1000;
	private convertAmount = 0;
	private totalConvertAmount = 0;
	private fromReset = false;

	@Output() changedRemainingTokens : EventEmitter<any> = new EventEmitter();  

	@Input() set totalAvailableCoins(value){
		this.totalTokens = value;
		if(value && value != 0){
			this.convertableTokens  = parseInt(this.totalTokens / this.conversionRate+'');
		}
	}

	constructor() {
	}

	tokensChanged(e : Range){

		if(this.fromReset == true){
			this.fromReset = false;
			return;
		}

		this.totalConvertAmount = this.conversionRate * e.value;
		this.changedRemainingTokens.emit(this.totalTokens - this.totalConvertAmount);

	}

	reset(){
		this.fromReset = true;
		this.convertableTokens = parseInt(this.totalTokens / this.conversionRate+'');;
		this.convertAmount = 0;
		this.totalConvertAmount = 0;
	}

}