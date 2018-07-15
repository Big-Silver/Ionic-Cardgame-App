import { Component, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
	selector: 'new-home-verification',
	templateUrl: 'new-home-verification.html'
})
export class NewHomeVerificationComponent implements AfterViewInit {

	@ViewChild('mainSlider') mainSlider : Slides;
	@Output() registrationConfirmed : EventEmitter<any> = new EventEmitter();
	@Output() verificationCodeChanged : EventEmitter<any> = new EventEmitter();

	private _mobileNumber = '';

	@Input() set mobileNumber(value){
		this._mobileNumber = value;

		if(value){
			this.messageSent = true;
		}

	}	

	private newMobileNumber = '';
	private verificationCode = '';
	private messageSent = false;

	constructor() {
	}

	sendMessage(){
		this._mobileNumber = this.newMobileNumber;
		this.newMobileNumber = '';
		this.messageSent = true;
	}

	ngAfterViewInit(){
		this.mainSlider.onlyExternal = true;
	}

	setCompletedState(){
		this.mainSlider.slideTo(1);
		setTimeout(()=>{
			this.registrationConfirmed.emit();
		},1800);
	}

	checkForMobileNumber(){
		if(!this.newMobileNumber && this._mobileNumber){
			this.messageSent = true;
		}else{
			this.messageSent = false;
		}
	}


}
