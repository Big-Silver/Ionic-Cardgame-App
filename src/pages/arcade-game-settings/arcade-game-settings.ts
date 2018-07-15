import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { pageSpeed } from '../../app/config/environment';
import { dashboardPage } from '../dashboard/dashboard';

import { ModalController } from 'ionic-angular';
import { VerificationDetailPage } from '../verification-detail/verification-detail';
import { CashoutPage } from '../cashout/cashout';


@Component({
	selector: 'page-arcade-game-settings',
	templateUrl: 'arcade-game-settings.html',
})
export class ArcadeGameSettingsPage {

	private isVerified = false;

	private balance: any = {
		balance1: 7,
		balance2: 24,
		balance3: 36
	};
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public appCtrl: App,
		private modal : ModalController
	) {
	}

	ionViewDidLoad() {
	}
	gotoHome() {
		this.viewCtrl.dismiss();
	}

	openCashoutPage(){
	}


	openVerificationPage(){
		let modal = this.modal.create(VerificationDetailPage);
		modal.present();
	}

	openVerificationPageWithCashout(){
		let modal = this.modal.create(VerificationDetailPage);
		modal.present();
		modal.onDidDismiss((data)=>{
			if(data === true){
				this.navCtrl.push(CashoutPage)
			}
		});
	}

}
