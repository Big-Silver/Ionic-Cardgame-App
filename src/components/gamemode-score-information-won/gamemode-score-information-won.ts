import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
	selector: 'gamemode-score-information-won',
	templateUrl: 'gamemode-score-information-won.html'
})
export class GamemodeScoreInformationWonComponent {

	@ViewChild('slides') slides : Slides;

	@Input() scoreRows : Array<any> = new Array<any>();
	@Input() playerInformation : Array<any> = new Array<any>();
	@Input() replayInformation : any = {};
	@Input() gameMode = '';
	@Input() playerPosition = '';

	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

	setStateToWin(){
		this.setStateToNormal();
	}

	setStateToNormal(){

		if(this.slides){
			this.slides.slideTo(0);
		}

	}

	setStateToLost(){
		this.setStateToNormal();
	}

}
