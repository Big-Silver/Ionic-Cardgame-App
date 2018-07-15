import { Component, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { Slides } from 'ionic-angular';
import { TweenMax } from 'gsap';

@Component({
	selector: 'arcade-content-game-details-won',
	templateUrl: 'arcade-content-game-details-won.html'
})
export class ArcadeContentGameDetailsWonComponent implements AfterViewInit {

	@ViewChild('slides') slides : Slides;
	@Output() slideTransitionStarted : EventEmitter<any> = new EventEmitter();
	@Output() slideTransitionFinished : EventEmitter<any> = new EventEmitter();

	private randomImage : string = '';
	private firstTimeLoaded = false;

	constructor() {
		this.setRandomImage();
	}

	setRandomImage(){
		var string = 'kawaii_emoticons_';
		var randomNumber = Math.floor(Math.random() * 6);
		this.randomImage = string + randomNumber + '.png';
	}

	restartViewAnimation(){

		if(this.firstTimeLoaded == false)
			return;

		this.slides.lockSwipes(false);
		this.slides.slideTo(0);
		this.slides.lockSwipes(true);
		this.ngAfterViewInit();
	}

	ngAfterViewInit(){

		if(!this.slides)
			return;

		this.firstTimeLoaded = true;
		this.slides.lockSwipes(true);
		setTimeout(()=>{
			this.slideTransitionStarted.emit();
		},100);
		setTimeout(()=>{
			this.slideToFirstScreen();
		},5000);
	}

	slideToFirstScreen(){

		if(!this.slides)
			return;

		this.goToNextSlide('.secondSlide .animate-queue');

		setTimeout(()=>{
			this.slideTransitionFinished.emit();
		},3000);

		setTimeout(()=>{
			
			if(!this.slides)
				return;

			this.goToNextSlide('.thirdSlide .animate-queue');

		},3500);
	}

	goToNextSlide(slideClassToAnimate){
		this.slides.lockSwipes(false);
		this.slides.slideNext();
		TweenMax.staggerFrom(slideClassToAnimate, 0.6, {opacity: 0, y: 20, delay: 0.1}, 0.4);
		this.slides.lockSwipes(true);
	}

}


