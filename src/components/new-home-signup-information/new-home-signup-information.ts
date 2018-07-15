import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';

import { NewHomeAvatarOptionsComponent } from '../new-home-avatar-options/new-home-avatar-options';


@Component({
	selector: 'new-home-signup-information',
	templateUrl: 'new-home-signup-information.html'
})
export class NewHomeSignupInformationComponent implements AfterViewInit {

	@ViewChild('slider') slider : Slides;
	@ViewChild(NewHomeAvatarOptionsComponent) imageSelectionComponent : NewHomeAvatarOptionsComponent;
	@Output() openDefaultAvatarListPage : EventEmitter<any> = new EventEmitter<any>();
	@Output() signUpWithFacebook : EventEmitter<any> = new EventEmitter<any>();
	@Output() avatarSelected : EventEmitter<any> = new EventEmitter<any>();
	@Output() onMobileChange : EventEmitter<any> = new EventEmitter<any>();
	@Output() onPasswordChange : EventEmitter<any> = new EventEmitter<any>();

	@Output() numberOrPasswordIsInvalid : EventEmitter<any> = new EventEmitter<any>();
	@Output() numberOrPasswordIsValid : EventEmitter<any> = new EventEmitter<any>();

	private mobileNumber = '';
	private password = '';
	private isFading = false;
	private isMobileFading = false;

	constructor() {}

	mobileChanged(){

		if(this.mobileNumber.length < 9){
			this.startFadingMobile();
			return false;
		}

		this.isMobileFading = false;
		return true;
	}

	passwordChanged(){
		if(this.password.length < 5){
			this.startFading();
			return false;
		}
		this.isFading = false;
		return true;
	}

	checkMobileWithoutError(){
		if(this.mobileNumber.length < 9)
			return false;
		return true;
	}

	checkPasswordWithoutError(){
		if(this.password.length < 5)
			return false;
		return true;
	}

	startFading(){
		
		if(this.isFading == true) return;
		this.isFading = true;
		setTimeout(()=>{
			this.isFading = false;
		},2000);

	}

	startFadingMobile(){

		if(this.isMobileFading == true) return;
		this.isMobileFading = true;
		setTimeout(()=>{
			this.isMobileFading = false;
		},2000);

	}

	setDefaultAvatarImage(imageUrl){
		this.imageSelectionComponent.setDefaultImage(imageUrl);
	}

	skipFacebookLogin(){
		this.slider.slideTo(1);
	}

	goToAvatarSelection(){
		this.slider.slideTo(2);
	}

	reset(){
		this.slider.slideTo(0);
	}

	ngAfterViewInit(){
		this.slider.onlyExternal = true;
	}

	checkForValidityOfNumberAndMobile(){
		if(!this.checkMobileWithoutError() || !this.mobileNumber || !this.checkPasswordWithoutError() || !this.password){
			return this.numberOrPasswordIsInvalid.emit();
		}
			
		this.numberOrPasswordIsValid.emit();
	}

}
