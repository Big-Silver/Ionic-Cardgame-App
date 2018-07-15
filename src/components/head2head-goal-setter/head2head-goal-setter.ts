import { Component, Output, EventEmitter, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { FadedCountdownDirective } from '../../directives/faded-countdown/faded-countdown';

@Component({
	selector: 'head2head-goal-setter',
	templateUrl: 'head2head-goal-setter.html'
})
export class Head2headGoalSetterComponent {

	@ViewChild('prizeButton') prizeButton : ElementRef;

	@Output() togglePlayState : EventEmitter<any> = new EventEmitter();
	@Output() startPlayingGame : EventEmitter<any> = new EventEmitter();
	@Output() countDownAboutToOver : EventEmitter<any> = new EventEmitter();
	@Output() battleAFriend : EventEmitter<any> = new EventEmitter();

	@ViewChild(FadedCountdownDirective) countDown : FadedCountdownDirective;
	@ViewChildren('screen1Element') s1Elements : QueryList<ElementRef>;
	@ViewChildren('screen2Element') s2Elements : QueryList<ElementRef>;


	private isOpen = false;
	private feeIndex = 0;
	private feeChart = [{
			fee : 0,
			prize : 0,
			isToken : true
		},{
			fee : 0.5,
			prize : 1,
			isToken : true
		},{
			fee : 1,
			prize : 2,
			isToken : true
		},{
			fee : 2,
			prize : 3,
			isToken : true
		},{
			fee : 3,
			prize : 1,
			isToken : false
		},{
			fee : 6,
			prize : 2,
			isToken : false
		},{
			fee : 10,
			prize : 3.50,
			isToken : false
		},{
			fee : 15,
			prize : 5.20,
			isToken : false
		}
	];

	constructor() {
	}

	private hideElementsOfScreen(elements : QueryList<ElementRef>){

		elements.forEach((element)=>{
			let ele = element.nativeElement as HTMLElement;
			ele.style.animationDirection  = 'forwards';
			ele.style.animationDuration = '0.4s';
			ele.classList.add('fadeOut');
			ele.classList.add('animated');
		});

		setTimeout(()=>{
			elements.forEach((element)=>{
				let ele = element.nativeElement as HTMLElement;
				ele.style.display = 'none';
				ele.classList.remove('fadeOut');
				ele.classList.remove('fadeIn');
				ele.classList.remove('animated');
			});
		},450);

	}

	private showElementsOfScreen(elements : QueryList<ElementRef>){

		elements.forEach((element)=>{
			let ele = element.nativeElement as HTMLElement;
			ele.style.display = 'unset';
			ele.style.animationDirection = 'unset';
			ele.style.animationDuration = '0.4s';
			ele.classList.add('fadeIn');
			ele.classList.add('animated');
		});

		setTimeout(()=>{
			elements.forEach((element)=>{
				let ele = element.nativeElement as HTMLElement;
				ele.classList.remove('fadeOut');
				ele.classList.remove('fadeIn');
				ele.classList.remove('animated');
			});
		},450);
	}

	private counterOver(){
		this.startPlayingGame.emit(true);
	}

	private aboutToOver(){
		this.countDownAboutToOver.emit();
	}

	private incrementFeeIndex(){
		if(this.feeIndex < this.feeChart.length - 1){
			this.pulsateButton();
			this.feeIndex++;
			if(this.feeIndex > 0){
				this.doOpen();
			}
		}
	}

	private decrementFeeIndex(){
		if(this.feeIndex != 0){
			this.feeIndex--;
		}
		if(this.feeIndex == 0){
			this.doClose();
		}
	}

	private doOpen(){
		this.isOpen = true;
		this.togglePlayState.emit(true);
	}

	private doClose(){
		this.isOpen = false;
		this.togglePlayState.emit(false);
	}

	private switchScreen(toSecondScreen){

		let elementsToHide = (toSecondScreen) ? this.s1Elements : this.s2Elements;
		let elementsToShow = (!toSecondScreen) ? this.s1Elements : this.s2Elements;

		this.hideElementsOfScreen(elementsToHide);

		setTimeout(()=>{
			this.showElementsOfScreen(elementsToShow);
		},500);

	}


	private pulsateButton(){
		let ele = this.prizeButton.nativeElement as HTMLElement;
		ele.style.animationDuration = '0.2s';
		ele.classList.add('pulse');
		setTimeout(()=>{
			ele.classList.remove('pulse');
		},200);
	}

	pauseCountdown(){
		this.countDown.pauseCountDown();
	}

	resumeCountdown(){
		this.countDown.resumeCountDown();
	}

	setStateToNormal(){
		this.doClose();
		this.switchScreen(false);
		this.feeIndex = 0;
		this.countDown.stopCountDown();
	}

	setStateToWin(){
		this.setStateToNormal();
	}

	setStateToLost(){
		this.setStateToNormal();
	}
	
	setWaitBeforeGameState(){
		this.togglePlayState.emit(false);
		this.countDown.stopCountDown();
		this.switchScreen(true);

		setTimeout(()=>{
			this.countDown.startCountDown();
		},1600);
	}

}