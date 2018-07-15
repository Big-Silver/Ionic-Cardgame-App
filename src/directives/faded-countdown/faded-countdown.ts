import { Directive, Input, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';

@Directive({
	selector: '[faded-countdown]' // Attribute selector
})
export class FadedCountdownDirective implements OnDestroy {

	private maxNumber = 0;
	private status = 'HOLD';
	private ele : HTMLElement;
	private shouldStop = false;
	private currentNumber = 0;

	@Output() counterOver = new EventEmitter();
	@Output() aboutToOver = new EventEmitter();

	@Input() set from(value){
		if(!value){
			value = 0;
		}
		this.maxNumber = value;
	}	

	constructor(
		private el : ElementRef
	){
		this.ele = this.el.nativeElement as HTMLElement;
	}

	startCountDown(){
		this.shouldStop = false;
		this.status = 'RUNNING';
		this.setNumber(this.maxNumber);
	}

	stopCountDown(){
		this.shouldStop = true;
		this.ele.style.filter = 'unset';
		this.ele.classList.remove('zoomIn');
	}

	pauseCountDown(){
		this.shouldStop = true;
		this.status = 'HOLD';
	}

	resumeCountDown(){
		this.shouldStop = false;
		this.status = 'RUNNING';
		this.setNumber(this.currentNumber);
	}


	setNumber(number){
		
		this.currentNumber = number;

		if(this.status == 'HOLD'){
			this.ele.classList.remove('faded-countdown');
			this.ele.innerHTML = number;
			return;
		}

		if(!this.el || number < 0 || this.shouldStop == true){

			if(number < 0){
				this.counterOver.emit();
			}

			this.ele.style.display = 'none';
			this.status = 'HOLD';
			return;
		}

		if(number == 1){
			this.aboutToOver.emit();
		}

		this.ele.innerHTML = number;
		this.ele.classList.add('faded-countdown');
		this.ele.style.filter = 'unset';
		setTimeout(()=>{
			this.ele.classList.remove('faded-countdown');
			this.ele.style.filter = 'opacity(0)';
		},800);
		setTimeout(()=>{
			this.setNumber(--number);
		},1000);

	}

	ngOnDestroy(){
		this.shouldStop = true;
	}


}
