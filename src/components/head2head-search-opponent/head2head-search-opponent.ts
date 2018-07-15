import { Component, Input, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import { Head2headGamePage } from '../../pages/head2head-game/head2head-game';
import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'head2head-search-opponent',
	templateUrl: 'head2head-search-opponent.html'
})
export class Head2headSearchOpponentComponent implements AfterViewInit {

	@ViewChild('opponentImage') opponent : ElementRef;
	@Output() showExitModal : EventEmitter<any> = new EventEmitter();

	private runAnimationLoop = false;
	private opponentImage : HTMLImageElement;
	private setToUnknownImage = false;
	

	private images = [
		"assets/images/profile/avatar2.svg",
		"assets/images/profile/avatar3.svg",
		"assets/images/profile/avatar4.svg",
		"assets/images/profile/avatar5.svg",
		"assets/images/profile/avatar6.svg",
		"assets/images/profile/avatar7.svg",
		"assets/images/profile/avatar8.svg",
		"assets/images/profile/avatar9.svg",
		"assets/images/profile/avatar10.svg",
		"assets/images/profile/avatar11.svg",
		"assets/images/profile/avatar12.svg",
		"assets/images/profile/avatar13.svg",
		"assets/images/profile/avatar14.svg",
		"assets/images/profile/avatar15.svg",
		"assets/images/profile/avatar16.svg",
		"assets/images/profile/avatar17.svg"
	];

	private anonymousImage = 'assets/images/profile/anonymous.png';

	constructor(
		private soundProvider : clickSoundProvider
	) {
		this.startSoundLoop();
	}

	setStateToNormal(){
		this.runAnimationLoop = false;
		this.setToUnknownImage = false;
		this.opponentImage.src = this.images[0];
		this.opponentImage.classList.add('fadeInRight');
	}

	setStateToWin(){
		this.setStateToNormal();
	}

	setStateToLost(){
		this.setStateToNormal();
	}

	setStateToWaitBeforeGame(){
		setTimeout(()=>{
			this.runAnimationLoop = true;
			this.opponentImage.classList.remove('fadeInRight');
			this.startTransition();
		},1000);
	}

	startTransition(currentIndex = 1){

		if(this.setToUnknownImage == true){
			this.opponentImage.src = this.anonymousImage;
			this.opponentImage.style.opacity = '0';
			this.opponentImage.classList.add('fadeIn');
			this.opponentImage.style.opacity = '1';
		}

		if(this.runAnimationLoop == false)
			return;

		if(currentIndex > this.images.length - 1)
			currentIndex = 0;

		
		this.opponentImage.style.animationDirection = 'forwards';
		this.opponentImage.style.animationDuration = '0.25s';
		this.opponentImage.classList.add('fadeOut');
		setTimeout(()=>{
			this.opponentImage.style.animationDuration = '0.4s';
			this.opponentImage.style.opacity = '0';
			this.opponentImage.src = this.images[currentIndex];
			this.opponentImage.classList.remove('fadeOut');
			this.opponentImage.classList.add('fadeIn');
			this.opponentImage.style.opacity = '1';
			setTimeout(()=>{
				this.opponentImage.classList.remove('fadeIn');
				this.opponentImage.classList.remove('fadeOut');
				setTimeout(()=>{
					this.startTransition(++currentIndex);
				},50);
			},400);
		},250);
		
	}

	countDownIsAboutToOver(){
		this.setToUnknownImage = true;
		this.runAnimationLoop = false;
	}

	ngAfterViewInit(){
		this.opponentImage = this.opponent.nativeElement as HTMLImageElement;
		this.setStateToNormal();
	}

	openExitModal(){
		this.showExitModal.emit();
	}

	startSoundLoop(){
		this.soundProvider.startWobbleLoop();
	}

	stopSoundLoop(){
		this.soundProvider.stopWobbleLoop();
	}

}
