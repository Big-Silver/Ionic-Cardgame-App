import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, DateTime, ViewController, TextInput, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
	selector: 'page-verification-detail',
	templateUrl: 'verification-detail.html',
})
export class VerificationDetailPage {

	@ViewChild('dateTime') dateTime : DateTime;

	private model  = {
		mobile : {
			model : '1234567890',
			placeholder : "Mobile",
			isValid : false,
		},
		name : {
			model : 'Amari jade',
			placeholder : "Full Name",
			isValid : false
		},
		email : {
			model : '',
			placeholder : "Email",
			isValid : false
		},
		address : {
			model : '',
			placeholder : "Address",
			isValid : false
		},
		birth : {
			model : '',
			placeholder : "DOB",
			isValid : false
		}
	};

	private isFirst = true;
	private isMale = true;
	private codeSent = true;
	private newInputFocused = false;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private platform : Platform,
		private keyboard : Keyboard
	) {
	}

	ionViewDidEnter(){
		this.checkMobileNumber(this.model.mobile);
		this.checkBirthDate(this.model.birth);
		this.checkAddress(this.model.address);
		this.checkFullName(this.model.name);
		this.checkEmail(this.model.email);
		this.checkAddress(this.model.address);
	}

	checkMobileNumber(mobileModel){
		this.codeSent = false;
		if(this.isFirst == true){
			this.isFirst = false;
			this.model.mobile.placeholder = "Mobile";
			if(this.model.mobile){
				this.model.mobile.placeholder = this.model.mobile.model;
				this.codeSent = true;
			}else{
				this.codeSent = false;
			}
		}

		if(!this.model.mobile.model){
			this.model.mobile.isValid = false;
			return;
		}else{
			this.model.mobile.isValid = true;
		}
	}

	checkBirthDate(birthModel){

		let date = new Date(birthModel.model);

		if(this.model.birth.model){

			let year = 0;
			let month = 0;
			let day = 0;

			let arr = (this.model.birth.model as string).split('-');

			if(arr.length != 3){
				this.model.birth.isValid = false;
				return;
			}

			year = parseInt(arr[0]);
			month = parseInt(arr[1]);
			day = parseInt(arr[2]);

			let selectedDate = new Date();
			selectedDate.setUTCFullYear(year);
			selectedDate.setUTCMonth(month-1);
			selectedDate.setUTCDate(day);

			let currentDate = new Date();

			let diff = new Date(currentDate.getTime() - selectedDate.getTime()).getUTCFullYear() - 1970;
			
			if(diff < 18){
				this.model.birth.isValid = false;
			}else{
				this.model.birth.isValid = true;
			}
			
		}else{
			this.model.birth.isValid = false;
		}
	}

	checkFullName(nameModel){
		this.model.name.model =  (typeof this.model.name.model == 'string' && this.model.name.model)
			? this.model.name.model.trim() : null;
		this.model.name.isValid = (this.model.name.model) ? true : false;
	}

	checkAddress(addressModel){
		this.model.address.model =  (typeof this.model.address.model == 'string' && this.model.address.model)
			? this.model.address.model.trim() : null;
		this.model.address.isValid = (this.model.address.model) ? true : false;
	}

	checkEmail(emailModel){
		let email = this.model.email.model;
		if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
			this.model.email.isValid = true;
		else
			this.model.email.isValid = false;
	}

	sendCode(){
		this.model.mobile.placeholder = this.model.mobile.model;
		this.model.mobile.model = '';
		this.codeSent = true;
	}

	openDatePicker(){

	}

	openDateTimePicker($event : Event){
		$event.preventDefault();
		this.dateTime.open();
		this.dateTime.registerOnChange((data)=>{
			this.model.birth.model = data;
			this.checkBirthDate(this.model.birth);
		});
	}

	ionViewDidLoad() {
	}

	closeModal(data = null){
		this.view.dismiss(data);
	}

	openKeyboard($event : TextInput){

		this.newInputFocused = true;

		if(!this.platform.is('android'))
			return;

		let subscription = this.keyboard.onKeyboardShow().subscribe(($e)=>{
			subscription.unsubscribe();
			let content = this.view.getIONContentRef().nativeElement as HTMLElement;
			content.style.transition = 'all 0.5s';
			content.style.transform = 'translate3d(0px, -25%, 0px)';
		});

		let subs = $event.blur.subscribe(()=>{
			subs.unsubscribe();
			this.newInputFocused = false;
		});
		
	}

	closeKeyboard($event){

		if(!this.platform.is('android'))
			return;

		setTimeout(()=>{

			if(this.newInputFocused == true)
				return;

			this.newInputFocused = false;
			let content = this.view.getIONContentRef().nativeElement as HTMLElement;
			content.style.transition = 'all 0s';
			content.style.transform = 'translate3d(0px, 0px, 0px)';
		},100);
	}

}
