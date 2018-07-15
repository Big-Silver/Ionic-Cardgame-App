import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
	selector: 'store-earn-buy',
	templateUrl: 'store-earn-buy.html'
})
export class StoreEarnBuyComponent implements AfterViewInit {

	@ViewChild('slide') slide : Slides;
	@Output() modeChanged : EventEmitter<any> = new EventEmitter();

	private activeSegment = 'EARN';

	constructor(
		private ele : ElementRef
	) {
	}

	changeActiveSegment(){

		this.activeSegment = this.activeSegment == "BUY" 
			? "EARN" : "BUY"; 

		this.reactToModeChange();

	}

	ngAfterViewInit(){
		this.slide.onlyExternal = true;
		setTimeout(()=>{
			this.reactToModeChange();
		},500);
	}

	reactToModeChange(){

		let nativeElement = this.ele.nativeElement as HTMLElement;

		if(this.activeSegment == 'EARN'){
			nativeElement.classList.add('earnMode');
			nativeElement.classList.remove('buyMode');
			this.modeChanged.emit('EARN');
			return this.slide.slideTo(0);
		}
		nativeElement.classList.add('buyMode');
		nativeElement.classList.remove('earnMode');
		this.modeChanged.emit('BUY');
		return this.slide.slideTo(1);
	}

}
