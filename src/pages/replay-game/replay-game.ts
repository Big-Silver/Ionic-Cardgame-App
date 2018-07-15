import { Component, OnDestroy, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, NavParams, Events, ModalController } from 'ionic-angular';

import { GameWebviewPage } from '../game-webview/game-webview';
import { gameHomePage } from '../game-home/game-home';
import { ReplayContentComponent } from '../../components/replay-content/replay-content';
import { RankingModalPage } from '../ranking-modal/ranking-modal';
import { SquadupModalPage } from '../squadup-modal/squadup-modal';
import { PlayerProfilePage } from '../player-profile/player-profile';
import { StorePage } from '../store/store';
import { HowToPlayPage } from '../how-to-play/how-to-play';

import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'page-replay-game',
	templateUrl: 'replay-game.html',
})
export class ReplayGamePage implements OnDestroy {

	@ViewChild(ReplayContentComponent) replayContentComponent : ReplayContentComponent;
	private disablePlayButton = false;
	private disableBackButton = false;
	private balance: any = { balance1 : 7, balance2 : 24, balance3 : 36 };
	private state = 'NORMAL';
	private gameRewardDetails = { contestStages : 1, grandPrize : 50, winPercentage : 20, backgroundImage : "assets/images/replay/cheesywords.png" };
	private playerInformation = { avatarImage : 'assets/images/profile/avatar2.svg', name : 'Amari-Jade', avatarCountryImage : 'assets/images/replay/uk.png' }
	private scoreRows =  [ { label: 'points', value: 1209 }, { label: 'times', value: 1830 }, { label: 'moves', value: 3614 }, { label: 'attacks', value: 1518 }];
	private replayInformation = { count : 0, topPercentage : '10', time : 180000 };
	private tempWinPosition = 1;
	private game = { 
		information: {  entryFee : 1, gameIcon : 'assets/images/replay/cheesyword.png', backgroundImage : 'assets/images/replay/game-background.png', stars : 4, badges : 5, name : 'Cheesy words' },
		playerLevel: 'EXPERT'
	};
	private how_to_play: any = {
		title: "Replay",
		description: "<p><strong>Replay</strong> is a daily time limited contest. You have upto 30 attempts. After each play, We will assess position against last 5 game scores submitted and award you a score for your rank.</p><p>At the end of time period we tally scores and top 20% highest scoring players win prizes.</p>",
		class: "contest"
	}

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private events : Events,
		private zone : NgZone,
		private soundProvider : clickSoundProvider,
		private modal : ModalController,
		private ele : ElementRef
	) {
		this.events.subscribe('replay-game:won', this.onGameWin);
		this.events.subscribe('replay-game:lose', this.onGameLose);
		this.tempWinPosition = this.navParams.data.tempWinPosition;
	}

	startPlayingGame() {
		this.replayInformation.count = 0;
		this.navCtrl.push(GameWebviewPage, {
			winEventName : 'replay-game:won',
			loseEventName : 'replay-game:lose'
		 }).then(()=>{
			this.setNormalState();
		});
	}

	openRankPopup(){

		let modal = this.modal.create(RankingModalPage);

		modal.present();

	}

	openSquadupModal(){
		let modal = this.modal.create(SquadupModalPage,{
			mode : 'SQUADUP'
		});
		modal.present();
	}

	ngOnDestroy(){
		this.events.unsubscribe('replay-game:won');
		this.events.unsubscribe('replay-game:lose');
	}

	private goToGameHomePage(){
		this.navCtrl.setRoot(gameHomePage,{},{animate:true});
	}

	private onGameWin = (param) => {

		this.disableBackButton = true;
		this.state = 'WON';
		if(param.start == true){
			this.soundProvider.playResultSound();
			this.startWinAnimation();
		}
		if(param.position){
			this.tempWinPosition = param.position;
		}
	}

	private onGameLose = (param) => {
		this.disableBackButton = true;
	}

	private setNormalState(){
		this.soundProvider.stopResultSound();
		this.state = 'NORMAL';
		this.replayContentComponent.setNormalState();
	}

	private startWinAnimation() {
		this.replayContentComponent.setStateToWin();
		this.replayInformation.count = 390;
	}

	private startLoseAnimation(){
		this.soundProvider.stopResultSound();
		this.replayContentComponent.setStateToLost();
	}

	private changeReplyCounter(event){
		if(event && event.type == 'add'){
			this.replayInformation.count += event.value;
		}else{
			this.replayInformation.count -= event.value;
		}
	}

	private doDisablePlayButton(status){
		this.disablePlayButton = status;
	}

	openPlayerProfile(){
		let modal = this.modal.create(PlayerProfilePage);
		modal.present({animate:false});
	}

	ionViewWillUnload(){
		this.soundProvider.stopResultSound();
	}

	openStoreScreen(){
		this.navCtrl.push(StorePage,{parentNativeElement : this.ele.nativeElement});
	}

 	openHowToPlay(){
		let modal = this.modal.create(HowToPlayPage, { data: this.how_to_play });
		modal.present();
	}


}
