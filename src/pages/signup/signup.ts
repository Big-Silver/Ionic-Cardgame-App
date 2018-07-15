import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { ProfileAvatarPage } from '../profile-avatar/profile-avatar';

//Custom Validator
import { EmailValidator, AgeValidator } from '../../validator/validator';
import { pageSpeed } from '../../app/config/environment';

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})
export class SignupPage {

	signupform: FormGroup;
	ageStore = [];
	selectOptionsAge: any;
	isSubmit: boolean;
	signupSuccess: boolean;
	//headerLogo:any;
	constructor(
		public navCtrl: NavController,
		public menu: MenuController,
		public navParams: NavParams,
		public formBuilder: FormBuilder,
		public loading: LoadingController,
		public homeCtrl: HomePage
	) {
		this.isSubmit = true;
		this.signupSuccess = false;
		this.signupform = formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
			password: ['', [Validators.required, Validators.minLength(8)]],
			email: ['', Validators.compose([Validators.required, EmailValidator.mailFormat])],
			age: ['', Validators.compose([Validators.required, AgeValidator.ageFormat])],
			gender: ['Gender'],
			promo: ['']
		});

		for (let i = 17; i <= 51; i++) {
			let n: any = i;
			if (i == 17) {
				n = 'Under ' + i;
			} else if (i > 50) {
				n = 50 + '+';
			}
			this.ageStore.push(n);
		}

		this.selectOptionsAge = {
			title: 'Select Age',
		};
	}

	ionViewDidEnter() {
		this.menu.swipeEnable(false);
		//this.headerLogo = document.getElementsByClassName("header-logo")[0];
	}

	doRegister() {
		if (!this.signupform.valid) {
			this.isSubmit = false;
			this.signupSuccess = false;
			return false;
		} else {
			this.isSubmit = true;
			let el = this;
			//Setup loader
			let loader = this.loading.create({ content: 'Please wait..' });
			loader.present().then(() => {
				setTimeout(function () {
					loader.dismiss();
					el.signupSuccess = true;
				}, 1500);

				setTimeout(function () {
					el.navCtrl.setRoot(ProfileAvatarPage, {}, { animate: true, animation: 'transition', duration: pageSpeed, direction: 'forward' });
				}, 4000);
			});
			//this.navCtrl.push(SignupSucessPage,{}, {animate: true,animation:'transition',duration:pageSpeed,direction:'forward'})
		}
	}

	backToHome() {
		this.navCtrl.setRoot(HomePage, {}, { animate: true, animation: 'transition', duration: pageSpeed, direction: 'back' });
		//this.headerLogo.style.visibility = "hidden";
	}

	swipeRightEvent(event) {
		this.homeCtrl.slideChanged(0, false);
		this.homeCtrl.doPlay();
	}

}
