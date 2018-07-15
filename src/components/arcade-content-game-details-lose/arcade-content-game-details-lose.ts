import { Component, AfterViewInit, ViewContainerRef, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';

import { fireAnimationService } from '../../animation/fire';
import { TimelineMax, Back } from 'gsap';
import { TweenMax } from 'gsap';

declare var burnAnimation : any;

@Component({
	selector: 'arcade-content-game-details-lose',
	templateUrl: 'arcade-content-game-details-lose.html',
	providers : [ fireAnimationService ]
})
export class ArcadeContentGameDetailsLoseComponent implements AfterViewInit {

	private randomImage : string;
	private firstTimeLoaded = false;
	@ViewChild('slides') slides : Slides; 
	@Output() restartGame : EventEmitter<any> = new EventEmitter();

	
	constructor(
		private fireService : fireAnimationService
	) {
		this.setRandomImage();
	}

	setRandomImage(){
		var string = 'kawaii_emoticons_';
		var randomNumber = Math.floor(Math.random() * 5);
		this.randomImage = string + randomNumber + '.png';
	}

	ngAfterViewInit(){

		this.firstTimeLoaded = true;
		this.setStateToLost();

	}

	changeSlides(){
		this.slides.lockSwipes(true);
		setTimeout(()=>{
			this.slides.lockSwipes(false);
			this.slides.slideNext();

			TweenMax.staggerFrom('.screen2 .animate-queue', 0.6, {opacity: 0, y: 20, delay: 0.1}, 0.4);
			this.slides.lockSwipes(true);
		},6000);
	}

	setStateToWin(){
		this.setStateToNormal();
	}

	setStateToNormal(){

		if(!this.slides)
			return;

		this.slides.lockSwipes(false);
		this.slides.slideTo(0,0);
		this.slides.lockSwipes(true);

	}

	setStateToLost(){

		if(this.firstTimeLoaded == false){
			return;
		}

		let animateInstance = new TimelineMax();
		
		animateInstance.staggerFromTo(".title-lose span", 0.5, 
		{ ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
		{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);

		this.changeSlides();

	}

}
