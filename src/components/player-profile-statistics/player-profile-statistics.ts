import { Component, AfterViewInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides, Slide } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { TimeInterval } from 'rxjs/operator/timeInterval';

@Component({
	selector: 'player-profile-statistics',
	templateUrl: 'player-profile-statistics.html'
})
export class PlayerProfileStatisticsComponent implements AfterViewInit {

	@Output() onPopularitySlideTapped : EventEmitter<any> = new EventEmitter();

	@ViewChild('slide') slide : Slides;

	@Input() highestPosition = {};
	@Input() popularity = {};
	@Input() mostPlayed = {};

	private subscription : Subscription;
	private intervalToCancel : number;
	private secondIntervalToCancel : number;

	constructor(
		private ele : ElementRef
	) {

	}

	ngAfterViewInit(){

		let ele = this.ele.nativeElement;
		this.slide.loop = true;
		this.slide.autoplay = 6000;

	}

	ionViewWillUnload(){
		if(this.subscription)
			this.subscription.unsubscribe();
	}

	goToPreviousSlide(){
		this.slide.slidePrev();
	}

	goToNextSlide(){
		this.slide.slideNext();
	}


}
