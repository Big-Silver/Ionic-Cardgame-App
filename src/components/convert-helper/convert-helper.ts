import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { WheelSelector, DefaultItem } from '@ionic-native/wheel-selector';
import { Select } from 'ionic-angular';


@Component({
	selector: 'convert-helper',
	templateUrl: 'convert-helper.html'
})
export class ConvertHelperComponent {

	private _availableTokens = 0;
	private remainingTokens = 0;

	@Input() set totalAvailableCoins(value){
		this._availableTokens = value;
		this.remainingTokens = this._availableTokens;
		this.resetAllTokens();
	}
	@Output() changedRemainingTokens : EventEmitter<any> = new EventEmitter();

	private redTokenInfo = {
		conversionRate  : 1000,
		numberOfSelectedTokens : 0,
		defaultItem : [],
		options : [],
		type : 'RED'
	};

	private blueTokenInfo = {
		conversionRate : 50,
		numberOfSelectedTokens : 0,
		defaultItem : [],
		options : [],
		type : 'BLUE'
	};

	private helperTokenInfo = {
		conversionRate  :500,
		numberOfSelectedTokens : 0,
		defaultItem : [],
		options : [],
		type : 'HELPER'
	};


	constructor(
		private wheelSelector : WheelSelector
	) {
		
	}

	private selectionClicked(tokenInfo, event){

		let index = (tokenInfo.options as Array<any>).findIndex((element : any)=>{
			if(element.value == tokenInfo.numberOfSelectedTokens)
				return true;
			return false;
		});

		let item : DefaultItem ={index:0,value:tokenInfo.options[index].description}

		this.wheelSelector.show({
			title: "Select",
			items:[
				tokenInfo.options
			],
			defaultItems : [item],
			positiveButtonText: "Done",
			negativeButtonText: "Cancel"
		}).then((data)=>{
			if(!data) return;
			if(!Array.isArray(data)) return;
			if(data.length == 0) return;
			
			tokenInfo.numberOfSelectedTokens =  tokenInfo.options[data[0].index].value;

			if(tokenInfo.type == "RED"){
				this.redTokenSelected();
			}else if(tokenInfo.type == "BLUE"){
				this.blueTokenSelected();
			}else{
				this.helperTokenSelected();
			}	

		},(err)=>{
		});
	}

	private redTokenSelected(){
		this.setremainingTokens();
		let remainingTokens = this.remainingTokens;
		let possibleNumberOfBlueTokens = parseInt((remainingTokens+(this.blueTokenInfo.conversionRate*this.blueTokenInfo.numberOfSelectedTokens))/this.blueTokenInfo.conversionRate+'');
		this.blueTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfBlueTokens);
		let possibleNumberOfHelperTokens = parseInt((remainingTokens+(this.helperTokenInfo.conversionRate*this.helperTokenInfo.numberOfSelectedTokens))/this.helperTokenInfo.conversionRate+'');
		this.helperTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfHelperTokens);
	}

	private blueTokenSelected(){
		this.setremainingTokens();
		let remainingTokens = this.remainingTokens;
		let possibleNumberOfRedTokens = parseInt((remainingTokens+(this.redTokenInfo.conversionRate*this.redTokenInfo.numberOfSelectedTokens))/this.redTokenInfo.conversionRate+'');
		this.redTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfRedTokens);
		let possibleNumberOfHelperTokens = parseInt((remainingTokens+(this.helperTokenInfo.conversionRate*this.helperTokenInfo.numberOfSelectedTokens))/this.helperTokenInfo.conversionRate+'');
		this.helperTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfHelperTokens);
	}

	private helperTokenSelected(){
		this.setremainingTokens();
		let remainingTokens = this.remainingTokens;
		let possibleNumberOfRedTokens = parseInt((remainingTokens+(this.redTokenInfo.conversionRate*this.redTokenInfo.numberOfSelectedTokens))/this.redTokenInfo.conversionRate+'');
		this.redTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfRedTokens);
		let possibleNumberOfBlueTokens = parseInt((remainingTokens+(this.blueTokenInfo.conversionRate*this.blueTokenInfo.numberOfSelectedTokens))/this.blueTokenInfo.conversionRate+'');
		this.blueTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfBlueTokens);
	}


	resetAllTokens(){

		let possibleNumberOfRedTokens = parseInt(this._availableTokens/this.redTokenInfo.conversionRate+'');
		let possibleNumberOfBlueTokens = parseInt(this._availableTokens/this.blueTokenInfo.conversionRate+'');
		let possibleNumberOfHelperTokens = parseInt(this._availableTokens/this.helperTokenInfo.conversionRate+'');

		this.redTokenInfo.numberOfSelectedTokens = 0;
		this.redTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfRedTokens);
		this.blueTokenInfo.numberOfSelectedTokens = 0;
		this.blueTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfBlueTokens);
		this.helperTokenInfo.numberOfSelectedTokens = 0;
		this.helperTokenInfo.options = this.getTokenArrayWithValue(possibleNumberOfHelperTokens);


	}

	setremainingTokens(){

		let totalAvailableCoins = this._availableTokens;

		let remainingTokens  = this._availableTokens 
			- (this.redTokenInfo.conversionRate*this.redTokenInfo.numberOfSelectedTokens)
			- (this.blueTokenInfo.conversionRate*this.blueTokenInfo.numberOfSelectedTokens)
			- (this.helperTokenInfo.conversionRate*this.helperTokenInfo.numberOfSelectedTokens);

		if(this.remainingTokens != remainingTokens){
			this.changedRemainingTokens.emit(remainingTokens);
		}

		this.remainingTokens = remainingTokens;

	}



	getTokenArrayWithValue(count){

		return (new Array(count+1)).fill({}).map((element, index)=>{

			let tempIndex = index ;
			let tempString = (tempIndex < 10 ) ? '0'+tempIndex : tempIndex;
			return {
				'value' : tempIndex,
				'string' : tempString+'',
				description : tempString+''
			};

		}).reverse();
	}

}