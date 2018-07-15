import { Component, OnDestroy, Input } from '@angular/core';

@Component({
	selector: 'timer',
	templateUrl: 'timer.html'
})
export class TimerComponent implements OnDestroy {

	@Input() set time(value){
		if(value && value > 0){
			this.setTimer(value);
		}
	}

	@Input() withDay = false;
	@Input() minimal = false;
	@Input() slotted = false;
	@Input() minimalWithDay = false;
	@Input() slottedWithIcon = false;

	private timer = {
		days : 0,
		hours : 0,
		minutes : 0,
		seconds : 0
	};

	private shadowTimer = {
		days : '00',
		hours : '00',
		minutes : '00',
		seconds : '00',
	};


	private heartBit;

	constructor() {
		
	}

	setTimer(time){
		
		if(time > 0){

			let days = parseInt((time / (24 * 3600))+'');
			time = time - (days * 24 * 3600);
			let hours = parseInt((time / 3600)+'');
			time = time - (hours * 3600);
			let minutes = parseInt((time / 60)+'');
			time = time - (minutes * 60);
			let seconds = time; 

			this.timer.seconds = seconds;
			this.timer.minutes = minutes;
			this.timer.hours = hours;
			this.timer.days = days;

		}

		if(!this.heartBit){
			this.heartBit = setInterval(()=>{

				if(--this.timer.seconds == -1){
					this.timer.seconds = 59;
					if(--this.timer.minutes == -1){
						this.timer.minutes = 59;
						if(--this.timer.hours == -1){
							this.timer.hours = 23;
							if(--this.timer.days == -1){
								return this.ngOnDestroy();
							}
						}
					}
				}

				this.cloneTimer();
				
			},1000);
		}
	}

	cloneTimer(){
		this.shadowTimer.days = this.timer.days+'';
		this.shadowTimer.hours = ( this.timer.hours >= 10 ) ? this.timer.hours+'' : '0'+this.timer.hours;
		this.shadowTimer.minutes = ( this.timer.minutes >= 10 ) ? this.timer.minutes+'' : '0'+this.timer.minutes;
		this.shadowTimer.seconds = ( this.timer.seconds >= 10 ) ? this.timer.seconds+'' : '0'+this.timer.seconds;
	}

	ngOnDestroy(){
		if(this.heartBit){
			clearInterval(this.heartBit);
			this.heartBit = null;
		}
	}

}
