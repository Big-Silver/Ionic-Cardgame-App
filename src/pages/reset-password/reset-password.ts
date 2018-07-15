import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ProfileAvatarPage } from '../profile-avatar/profile-avatar';

//Custom Validator
import { EmailValidator, AgeValidator } from '../../validator/validator';
import { pageSpeed } from '../../app/config/environment';
;


@Component({
	selector: 'page-reset-password',
	templateUrl: 'reset-password.html',
})
export class ResetPassword {

	resetpassword: FormGroup;
	isSubmit: boolean;

	resetSuccess: boolean;
	Isforget: boolean;
	public rootPage: any = LoginPage;
	signupSuccess: boolean;

	constructor(
		public navCtrl: NavController,
		public menu: MenuController,
		public navParams: NavParams,
		public formBuilder: FormBuilder,
		public loading: LoadingController,
		public homeCtrl: HomePage
	) {
		this.isSubmit = true;
		this.resetSuccess = false;
		this.Isforget = false;
		this.resetpassword = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.mailFormat])]
		});
	}

	ionViewDidEnter() {
		this.menu.swipeEnable(false);
	}

	backToHome() {
		this.navCtrl.setRoot(LoginPage, {}, { animate: true, animation: 'transition', duration: pageSpeed, direction: 'back' });
	}


	send() {

		if (!this.resetpassword.valid) {
			this.isSubmit = false;
			this.resetSuccess = false;
			return false;
		} else {
			this.isSubmit = true;
			this.resetSuccess = true;
			let el = this;
			setTimeout(function () {
				el.homeCtrl.slideChanged('login', true);
				el.resetSuccess = false;
				el.resetpassword.reset();
			}, 4000);
		}

	}

}
