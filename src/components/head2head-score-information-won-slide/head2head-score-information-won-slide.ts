import { Component, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular'; 

import { Head2headScoreInformationComponent } from '../head2head-score-information/head2head-score-information';


@Component({
	selector: 'head2head-score-information-won-slide',
	templateUrl: 'head2head-score-information-won-slide.html'
})
export class Head2headScoreInformationWonSlideComponent {


	private isFirstTimeLoaded = false;
	
	@ViewChild('slides') slides : Slides;
	@ViewChild(Head2headScoreInformationComponent) scoreInformationComponent : Head2headScoreInformationComponent;

	@Input() ownInformation : Array<any> = new Array<any>();
	@Input() opponentInformation : any = {};
	@Input() ownScore : Array<any> = new Array<any>();
	@Input() opponentScore : any = {};

	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();

	constructor() {

	}

	private startSlideTransition(){
		setTimeout(()=>{
			this.nextSlide();
			setTimeout(()=>{
				this.scoreInformationComponent.startShuffling();
			},200);
			this.slides.lockSwipes(false);
		},5000);
	}

	setStateToNormal() {
		this.goToSlide();
	}

	setStateToWin() {

		if(this.isFirstTimeLoaded == false)
			return;

		this.startSlideTransition();
	}

	setStateToLost() {
		this.setStateToNormal();
	}


	goToSlide(slideNumber = 1){
		this.slides.lockSwipes(false);
		this.slides.slideTo(slideNumber);
		this.slides.lockSwipes(true);
	}

	nextSlide(){
		this.slides.lockSwipes(false);
		this.slides.slideNext();
		this.slides.lockSwipes(true);
	}

	ngAfterViewInit(){
		this.slides.lockSwipes(true);
		this.isFirstTimeLoaded =  true;
		this.startSlideTransition();
	}
}
