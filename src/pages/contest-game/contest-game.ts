import { Component, OnDestroy, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, NavParams, Events, ModalController } from 'ionic-angular';

import { GameWebviewPage } from '../game-webview/game-webview';
import { gameHomePage } from '../game-home/game-home';
import { ContestContentComponent } from '../../components/contest-content/contest-content';
import { RankingModalPage } from '../ranking-modal/ranking-modal';
import { SquadupModalPage } from '../squadup-modal/squadup-modal';
import { PlayerProfilePage } from '../player-profile/player-profile';

import { StorePage } from '../store/store';
import { HowToPlayPage } from '../how-to-play/how-to-play';

import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'page-contest-game',
	templateUrl: 'contest-game.html',
})
export class ContestGamePage {

	@ViewChild(ContestContentComponent) contestContentComponent : ContestContentComponent;
	private disablePlayButton = false;
	private disableBackButton = false;
	private balance: any = { balance1 : 7, balance2 : 24, balance3 : 36 };
	private state = 'NORMAL';
	private gameRewardDetails = { contestStages : 3, grandPrize : 50, winPercentage : 20, backgroundImage : "assets/images/contest/angryvegan-big.png" };
	private playerInformation = { avatarImage : 'assets/images/profile/avatar2.svg', name : 'Amari-Jade', avatarCountryImage : 'assets/images/contest/uk.png', badges : 2, stars : 4 }
	private scoreRows =  [ { label: 'points', value: 1209 }, { label: 'times', value: 1830 }, { label: 'moves', value: 3614 }, { label: 'attacks', value: 1518 }];
	private replayInformation = { count : 0, topPercentage : '10', time : 180000 };
	private tempWinPosition = 1;
	private game = { 
		information: {  entryFee : 0.5, gameIcon : 'assets/images/contest/angryvegan.png', backgroundImage : 'assets/images/contest/game-background.png', stars : 4, badges : 5, name : 'Angry Vegan' },
		playerRank: 'EXPERT'
	};
	private how_to_play: any = {
		title: "Contest",
		description: "<p><strong>Contest</strong> is a 3 stage elimination with time limits at each stage. You have upto 30 attempts. After each play, We will assess position against last 5 game scores submitted and award you a score for your rank.</p><p>At the end of time period we tally scores and the highest scoring players win prizes.</p>",
		class: "contest",
	}

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private events : Events,
		private zone : NgZone,
		private modal : ModalController,
		private ele : ElementRef,
		private soundProvider : clickSoundProvider
	) {
		this.events.subscribe('contest-game:won', this.onGameWin);
		this.events.subscribe('contest-game:lose', this.onGameLose);
		this.tempWinPosition = this.navParams.data.tempWinPosition;
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

	startPlayingGame() {
		this.replayInformation.count = 0;
		this.navCtrl.push(GameWebviewPage, {
			winEventName : 'contest-game:won',
			loseEventName : 'contest-game:lose'
		 }).then(()=>{
			this.setNormalState();
		});
	}

	ngOnDestroy(){
		this.events.unsubscribe('contest-game:won');
		this.events.unsubscribe('contest-game:lose');
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
	}

	private setNormalState(){
		this.state = 'NORMAL';
		this.contestContentComponent.setNormalState();
		this.soundProvider.stopResultSound();
	}

	private startWinAnimation() {
		this.contestContentComponent.setStateToWin();
		this.replayInformation.count = 390;
	}

	private startLoseAnimation(){
		this.soundProvider.stopResultSound();
		this.contestContentComponent.setStateToLost();
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
		modal.present({
			animate : false
		});
	}

	openStoreScreen(){
		this.navCtrl.push(StorePage,{parentNativeElement : this.ele.nativeElement});
	}

	openHowToPlay(){
		let modal = this.modal.create(HowToPlayPage, { data: this.how_to_play});  
		modal.present();
	}

	ionViewWillUnload(){
		this.soundProvider.stopResultSound();
	}

}
