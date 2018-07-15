import { Component, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'head2head-winning-slide',
  templateUrl: 'head2head-winning-slide.html'
})
export class Head2headWinningSlideComponent {

	@ViewChild('slides') slides : Slides;

	@Output() restartGame : EventEmitter<any> = new EventEmitter();
	@Output() transitionOver : EventEmitter<any> = new EventEmitter();

	private isFirstTimeLoaded = false;
	private randomImage : string = '';
	private changeContentOfSecondSlide = false;
	private inCashPrize = false;


	constructor() {
		this.setRandomImage();
	}

	setRandomImage(){
		var string = 'kawaii_emoticons_';
		var randomNumber = Math.floor(Math.random() * 6);
		this.randomImage = string + randomNumber + '.png';
	}

	setStateToNormal(){

		if(!this.slides){
			return;
		}

		this.slides.lockSwipes(false);
		this.slides.slideTo(0);
		this.slides.lockSwipes(true);
	}

	setStateToWin(){

		if(!this.isFirstTimeLoaded)
			return;

		if(!this.slides)
			return;

		this.slides.lockSwipes(true);
		setTimeout(()=>{

			let random = Math.floor(Math.random() * 100);
			let modulo = random % 2;

			this.changeContentOfSecondSlide = modulo != 0 ? true : false;
			this.goToNextSlide();
			this.transitionOver.emit();
		},5000);

	}

	setStateToLost(){

		this.setStateToNormal();

	}

	ngAfterViewInit(){
		this.isFirstTimeLoaded = true;
		this.setStateToWin();
	}

	goToNextSlide(){
		this.slides.lockSwipes(false);
		this.slides.slideNext();
		this.slides.lockSwipes(true);
	}

}
