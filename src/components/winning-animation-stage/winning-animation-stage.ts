import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
	selector: 'winning-animation-stage',
	templateUrl: 'winning-animation-stage.html',
})
export class WinningAnimationStageComponent implements AfterViewInit {

	private shouldPulsateOnce = false;

	@ViewChild('imgBigCircle') private imgBigCircle : ElementRef;
	@ViewChild('imgFlag') private imgFlag : ElementRef;
	@ViewChild('imgPrizeBox') private imgPrizeBox : ElementRef;
	@ViewChild('imgTrophy') private imgTrophy : ElementRef;

	

	constructor(
		private elementRef : ElementRef
	) {
		
	}

	startAnimation(){

	}

	ngAfterViewInit(){
	}


	getLocations(){

		
		let prizeElement = this.imgPrizeBox.nativeElement as HTMLElement;
		let trophyElement = this.imgTrophy.nativeElement as HTMLElement;


	}

	getPlayerImagePosition(){
		let circleElement = this.imgBigCircle.nativeElement as HTMLElement;
		return circleElement.getBoundingClientRect();
		
	}

	getPlayerFlagImagePosition(){
		let flagElement = this.imgFlag.nativeElement as HTMLElement;
		return flagElement.getBoundingClientRect();
	}

	getPlayerNamePosition(){
		return (this.imgPrizeBox.nativeElement as HTMLElement).getBoundingClientRect();
	}
	
	pulsateImage(){
		this.shouldPulsateOnce = true;
		setTimeout(()=>{
			this.shouldPulsateOnce = false;
		},1200);
	}


}
