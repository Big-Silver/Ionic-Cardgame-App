import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SquadupRequestPage } from '../squadup-request/squadup-request';

import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'page-battle-a-friend',
	templateUrl: 'battle-a-friend.html',
})
export class BattleAFriendPage {

	private mode = 'BATTLE_A_FRIEND';
	private isPageLoaded = false;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private view : ViewController,
		private soundProvider : clickSoundProvider
	) {
	}

	ionViewDidLoad() {
	}

	goBack(){
		this.view.dismiss();
	}

	ionViewDidEnter(){
		this.soundProvider.playWarSnareSound();
		setTimeout(()=>{
			this.isPageLoaded = true;
		},300);
	}

}