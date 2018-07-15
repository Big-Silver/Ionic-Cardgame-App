import { Component, Input, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';
import { fireAnimationService } from '../../animation/fire';

import { Head2headScoreInformationComponent } from '../head2head-score-information/head2head-score-information';


@Component({
	selector: 'head2head-score-information-lose-slide',
	templateUrl: 'head2head-score-information-lose-slide.html',
	providers : [fireAnimationService]
})
export class Head2headScoreInformationLoseSlideComponent {

	private isFirstTimeLoaded = false;
	
	@ViewChild('slides') slides : Slides;
	@ViewChild(Head2headScoreInformationComponent) scoreInformationComponent : Head2headScoreInformationComponent;

	@Input() ownInformation : Array<any> = new Array<any>();
	@Input() opponentInformation : any = {};
	@Input() ownScore : Array<any> = new Array<any>();
	@Input() opponentScore : any = {};

	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();

	constructor(
		private fireService : fireAnimationService,
		private ele : ElementRef
	) {

	}

	private startSlideTransition(){
		setTimeout(()=>{
			this.nextSlide();
			setTimeout(()=>{
				this.scoreInformationComponent.startShuffling();
			},200);
			this.slides.lockSwipes(false);
		},6000);
	}

	setStateToNormal() {
		this.goToSlide();
		this.fireService.removeFireInstance();
	}

	setStateToWin() {

		this.setStateToNormal();
		
	}

	setStateToLost() {

		if(this.isFirstTimeLoaded == false)
			return;

		this.startSlideTransition();
		this.fireService.getFireInstanceForElement((this.ele.nativeElement as HTMLElement).parentElement, false);
		this.fireService.setup();
		setTimeout(()=>{
			this.fireService.removeFireInstance();
		},4000);
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
		this.setStateToLost();
	}

}
