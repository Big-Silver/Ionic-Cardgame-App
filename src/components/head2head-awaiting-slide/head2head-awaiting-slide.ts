import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';



@Component({
	selector: 'head2head-awaiting-slide',
	templateUrl: 'head2head-awaiting-slide.html'
})
export class Head2headAwaitingSlideComponent implements AfterViewInit {

	@ViewChild('slides') slides : Slides;
	@Output() restartGame : EventEmitter<any> = new EventEmitter();
	@Output() transitionOver : EventEmitter<any> = new EventEmitter();

	private isFirstTimeLoaded = false;
	private shiningTextProperty = {
		fontSize : '29px'
	}
	
	constructor() {
	}

	ngAfterViewInit(){
		this.isFirstTimeLoaded = true;
		this.setStateToAfterWaiting();
	}

	setStateToNormal(){
		this.slides.lockSwipes(false);
		this.slides.slideTo(0,0);
		this.slides.lockSwipes(true);
	}

	setStateToWin(){
		this.setStateToNormal();
	}

	setStateToLost(){
		this.setStateToNormal();
	}

	setStateToAfterWaiting(){

		if(this.isFirstTimeLoaded == false){
			return;
		}

		this.slides.lockSwipes(true);
		setTimeout(()=>{
			this.slides.lockSwipes(false);
			this.slides.slideNext();
			this.slides.lockSwipes(true);
			this.transitionOver.emit();
		},6000);
	}

}