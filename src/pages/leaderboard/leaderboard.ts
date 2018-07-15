import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PlayerProfilePage } from '../player-profile/player-profile';


@Component({
	selector: 'page-leaderboard',
	templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

	private players = [];
	private ownResult = {
		profile : 'assets/images/profile/avatar46.svg',
		flag : 'assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
		name : 'Player 46',
		weekly : '5.6m',
		index : '1360',
		total : '7m'
	};

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private modal : ModalController
	) {
		this.setPlayers();
	}

	ionViewDidLoad() {
	}

	private setPlayers(){
		let i = 0;
		while(i<21){
			i++;
			this.players.push({
				index : i,
				profile : 'assets/images/profile/avatar'+i+'.svg',
				flag : 'assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
				name : 'Player '+i,
				weekly : i*100,
				total : i*50
			});
		}
	}

	dismissView(){
		this.view.dismiss();
	}

	openPlayerProfile(){
		this.modal.create(PlayerProfilePage).present({animate:false});
	}

}
