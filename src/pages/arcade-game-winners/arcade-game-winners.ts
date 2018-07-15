import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { pageSpeed } from '../../app/config/environment';
import { dashboardPage } from '../dashboard/dashboard';

@Component({
	selector: 'page-arcade-game-winners',
	templateUrl: 'arcade-game-winners.html',
})
export class ArcadeGameWinnersPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
		public appCtrl: App) {
	}

	ionViewDidLoad() {
	}
	gotoHome() {
		this.navCtrl.setRoot(dashboardPage, {}, { animate: true, animation: 'transition', duration: 500, direction: 'back' });
	}

}
