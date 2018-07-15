import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Slides, ViewController, ModalController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';

import { NewHomeLoginForgotPasswordComponent } from '../../components/new-home-login-forgot-password/new-home-login-forgot-password';
import { NewHomeSignupPage } from '../new-home-signup/new-home-signup';
import { SplashPage } from '../splash/splash';
import { dashboardPage } from '../dashboard/dashboard';

import { ImageCacher } from '../../experiment/imageCacher';

import * as firebase from 'firebase';



@Component({
	selector: 'page-new-home-login',
	templateUrl: 'new-home-login.html',
})
@ImageCacher([
	'NewHomeSignupPage',
	'SplashPage'
])
export class NewHomeLoginPage implements AfterViewInit {

	@ViewChild('mainSlider') mainSlider : Slides;
	@ViewChild(NewHomeLoginForgotPasswordComponent) forgotPasswordComponent : NewHomeLoginForgotPasswordComponent;

	mobileNumber: string = '';
	password: string = '';

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private modal : ModalController,
		public authProvider: AuthProvider,
		public alertProvider: AlertProvider,
	) {
	}

	ionViewDidLoad() {
	}

	goBack(){
		this.navCtrl.pop({animation:'backword'});
	}

	goToScreenTwo(){
		this.mainSlider.slideTo(1);
	}

	goToScreenOne(){
		this.mainSlider.slideTo(0);
		setTimeout(()=>{
			this.forgotPasswordComponent.reset();
		},500);
	}

	ngAfterViewInit(){
		this.mainSlider.onlyExternal = true;
	}

	goToSignupPage(){
		this.navCtrl.push(NewHomeSignupPage).then(()=>{
			this.view.dismiss();
		});
	}

	goToGameDashboard(){
		this.authProvider.loginWithPhone(this.mobileNumber, this.password).then(res=> {
			let modal = this.modal.create(SplashPage,{
				prepareForExit : (()=>{
					return  (this.navCtrl.parent as NavController).setRoot(dashboardPage,{});
				}).bind(this)
			},{
				cssClass : 'splash-modal'
			});
			modal.present({
				animation : 'wp-transition'
			});
		})
		.catch(err=> {
			this.alertProvider.create('Phone number or password is not correct', 0, {
				buttons: ['ok']
			}).present();
		})
	}

}
