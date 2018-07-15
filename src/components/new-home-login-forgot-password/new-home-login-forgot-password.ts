import { Component, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
	selector: 'new-home-login-forgot-password',
	templateUrl: 'new-home-login-forgot-password.html'
})
export class NewHomeLoginForgotPasswordComponent implements AfterViewInit {


	@Output() goBack : EventEmitter<any> = new EventEmitter();
	@ViewChild('forgotPasswordSlider') mainSlider  :  Slides;

	private mobile : string = '';

	constructor() {
	}

	ngAfterViewInit(){
		this.mainSlider.onlyExternal = true;
	}

	private moveToNextSlide(){
		this.mainSlider.slideTo(1);
		setTimeout(()=>{
			this.goBack.emit();
		},1500);
	}

	reset(){
		this.mobile = '';
		this.mainSlider.slideTo(0);
	}

}
