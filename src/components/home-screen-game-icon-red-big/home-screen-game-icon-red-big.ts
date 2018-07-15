import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, ChangeDetectorRef, NgZone} from '@angular/core';

@Component({
	selector: 'home-screen-game-icon-red-big',
	templateUrl: 'home-screen-game-icon-red-big.html'
})
export class HomeScreenGameIconRedBigComponent implements AfterViewInit, OnDestroy {

	@ViewChild('animationContainer') animationContainer : ElementRef;
	@ViewChild('timerWrapper') timerWrapper : ElementRef;

	private _game : any;
	private isLoaded = false;
	private heartBit;
	private disableTimerScroll = false;
	private nativeTimerWrapper : HTMLElement;

	private timer = {
		hours : 0,
		minutes : 0,
		seconds : 0
	};

	private shadowTimer = {
		hours : '00',
		minutes : '00',
		seconds : '00'
	};

	@ViewChild('background') gamePoster : ElementRef;

	@Input() set data(value){
		this._game = value;
		this.setImageIfExists();

		this.zone.runOutsideAngular(()=>{
			this.setTimer();
		});

		if(value && value.isCountDown === true){
			this.setAnimationContainerAfterRandomTime();
		}

	}

	constructor(
		private changeDetectorRef : ChangeDetectorRef,
		private zone : NgZone
	) {
	}	

	setImageIfExists(){

		if(this.isLoaded == false)
			return;

		if(this._game.image){
			let poster = this.gamePoster.nativeElement as HTMLElement;
			poster.style.backgroundImage = "url('"+this._game.image+"')";
		}
	}

	setTimer(){


		if(this._game.isCountDown == true && !this.heartBit && this._game.time > 0){

			let time = this._game.time;

			let seconds = time % 60;
			time = time-seconds;
			let minutes = (time % 3600)/60;
			time = time - (minutes * 60);
			let hours = parseInt(time / 3600+'');

			this.timer.seconds = seconds;
			this.timer.minutes = minutes;
			this.timer.hours = hours;

		}

		if(this._game.isCountDown == true && !this.heartBit){
			this.heartBit = setInterval(()=>{

				if(--this.timer.seconds == -1){
					this.timer.seconds = 59;
					if(--this.timer.minutes == -1){
						this.timer.minutes = 59;
						if(--this.timer.hours == -1){
							return this.destroyTimer();
						}
					}
				}

				this.cloneTimer();
				
			},1000);
		}
	}

	cloneTimer(){
		this.shadowTimer.hours = ( this.timer.hours >= 10 ) ? this.timer.hours+'' : '0'+this.timer.hours;
		this.shadowTimer.minutes = ( this.timer.minutes >= 10 ) ? this.timer.minutes+'' : '0'+this.timer.minutes;
		this.shadowTimer.seconds = ( this.timer.seconds >= 10 ) ? this.timer.seconds+'' : '0'+this.timer.seconds;

		if(this.disableTimerScroll == true)
			return;

		this.nativeTimerWrapper.innerHTML = this.shadowTimer.hours + ':' + this.shadowTimer.minutes + ':' + this.shadowTimer.seconds;

	}

	destroyTimer(){
		if(this.heartBit){
			clearInterval(this.heartBit);
			this.heartBit = null;
		}
	}

	ngAfterViewInit(){
		this.isLoaded = true;
		this.nativeTimerWrapper = this.timerWrapper.nativeElement as HTMLElement;
		this.setImageIfExists();
	}

	ngOnDestroy(){
		this.destroyTimer();
	}

	private setAnimationContainerAfterRandomTime(){

		let randomTime = Math.floor(Math.random() * 5500);
		setTimeout(()=>{
			let ele  = this.animationContainer.nativeElement as HTMLElement;

			if(this.disableTimerScroll == true)
				return;
			ele.classList.add('animation-container');
		},randomTime);

	}

	detachFromChangeDetection(){
		this.disableTimerScroll = true;
		(this.animationContainer.nativeElement as HTMLElement).classList.remove('animation-container');
		this.changeDetectorRef.detach();
	}

	attachToChangeDetection(){
		this.disableTimerScroll = false;
		this.setAnimationContainerAfterRandomTime();
		this.changeDetectorRef.reattach();
	}

}
