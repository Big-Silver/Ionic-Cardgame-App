import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { gameHomePage } from '../game-home/game-home';
import { GameWebviewPage } from '../game-webview/game-webview';

import { StorePage } from '../store/store';
import { HowToPlayPage } from '../how-to-play/how-to-play';

@Component({
	selector: 'page-instantwin-game',
	templateUrl: 'instantwin-game.html',
})
export class InstantwinGamePage {

	private state = 'NORMAL';
	private balance: any = { balance1 : 7, balance2 : 24, balance3 : 36 };
	private game = { 
		information: {  entryFee : 10, gameIcon : 'assets/images/instantwin/lifesabeach.png', backgroundImage : 'assets/images/instantwin/game-background.png', stars : 4, badges : 5, name : 'Life’s a beach' },
		playerLevel: 'EXPERT'
	};
	private gameRewardDetails = { contestStages : 1, grandPrize : 200, winPercentage : 20, backgroundImage : "assets/images/instantwin/lifesabeach-big.png" };
	private how_to_play: any = {
		title: "Instant Win",
		description: "<p><strong>Instant Win</strong>  is a prize selecter game which picks the prize a player will be playing for.</p><p>This game entry fee is tickets. Which a player gets free playing match and completing tasks.</p>",
		class: "instant",
	}

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private modal : ModalController,
		private ele : ElementRef
	) {
	}

	ionViewDidLoad() {
	}

	private goToGameHomePage(){
		this.navCtrl.setRoot(gameHomePage,{},{animate:true});
	}

	startPlayingGame() {
		this.navCtrl.push(GameWebviewPage, {
			winEventName : 'instant-game:won',
			loseEventName : 'instant-game:lose'
		});
	}

	openStoreScreen(){
		this.navCtrl.push(StorePage,{parentNativeElement : this.ele.nativeElement});
	}

	openHowToPlay(){
		let modal = this.modal.create(HowToPlayPage, { data: this.how_to_play });
		modal.present();
	}

}
