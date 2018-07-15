import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dashboardPage } from '../dashboard/dashboard';

//Pages call
import { HomePage } from '../home/home';
import { ResetPassword } from '../reset-password/reset-password';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	loginform: FormGroup;
	isSubmit: boolean;
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
		this.signupSuccess = false;
		this.loginform = formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
			password: ['', [Validators.required, Validators.minLength(8)]]
		});
	}

	ionViewDidEnter() {
		this.menu.swipeEnable(false);
	}

	forgotpassword() {
		this.navCtrl.push(ResetPassword);
	}

	doLogin() {
		if (!this.loginform.valid) {
			this.isSubmit = false;
			return false;
		} else {
			this.isSubmit = true;
			this.navCtrl.swipeBackEnabled = false;
			this.navCtrl.setRoot(dashboardPage);
		}
	}

	goToPage(pageName) {
		this.homeCtrl.slideChanged(pageName, true);
	}

	swipeRightEvent(event) {
		this.homeCtrl.slideChanged(0, false);
		this.homeCtrl.doPlay();
	}

}
