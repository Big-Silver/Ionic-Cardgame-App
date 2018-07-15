import { Component } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-outcome-before-result',
	templateUrl: 'outcome-before-result.html',
})
export class OutcomeBeforeResultPage {

	private shouldStartAnimation = false;
	private animationDirection = '';
	private outcome = '';
	private mode = "";
	private rank = {};


	private ranks = [
		{ title : "BEGINNER", src : "./assets/images/result-outcome/h-ribbon-green.png"},
		{ title : "AMATEUR", src : "./assets/images/result-outcome/h-ribbon-orange.png"},
		{ title : "PRO", src : "./assets/images/result-outcome/h-ribbon-blue.png"},
		{ title : "ELITE", src : "./assets/images/result-outcome/h-ribbon-purple.png"},
	];

	constructor(
		private view : ViewController,
		public navParams: NavParams
	) {

		if(this.navParams.data.mode){
			this.mode = this.navParams.data.mode;
			if(this.mode == "WON"){
				this.animationDirection = 'BOTTOM_TOP';
			}else if(this.mode == "LOSE"){
				this.animationDirection = 'TOP_BOTTOM';
			}
		}

		if(this.navParams.data.outcome){
			this.outcome = this.navParams.data.outcome;
		}

		this.rank = this.ranks[Math.floor(Math.random()*this.ranks.length)];

	}

	ionViewDidEnter() {
		setTimeout(()=>{
			this.shouldStartAnimation = true;
			setTimeout(()=>{
				this.view.dismiss({},'',{
					animate : true,
					animation : 'wp-transition'
				});	
			},3000);
		},500);
	}

}