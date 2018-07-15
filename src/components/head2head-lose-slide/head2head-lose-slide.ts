import { Component, AfterViewInit, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';
import { fireAnimationService } from '../../animation/fire';
import { TimelineMax, Back } from 'gsap';


@Component({
	selector: 'head2head-lose-slide',
	templateUrl: 'head2head-lose-slide.html'
})
export class Head2headLoseSlideComponent {

	private randomImage : string;
	private firstTimeLoaded = false;
	private shiningTextProperty = {
		fontSize : '29px'
	}

	@ViewChild('slides') slides : Slides; 
	@Output() restartGame : EventEmitter<any> = new EventEmitter();
	@Output() transitionOver : EventEmitter<any> = new EventEmitter();

	
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
			this.slides.lockSwipes(true);
			this.transitionOver.emit();
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
