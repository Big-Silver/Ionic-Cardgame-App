import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { NavController, NavParams, Events, ViewController, AlertController, ModalController } from 'ionic-angular';

import { confettiAnimationService } from '../../animation/confetti';

import { GameWebviewPage } from '../game-webview/game-webview';
import { Head2headContentComponent } from '../../components/head2head-content/head2head-content';
import { Head2headSearchOpponentComponent } from '../../components/head2head-search-opponent/head2head-search-opponent';
import { Head2headGoalSetterComponent } from '../../components/head2head-goal-setter/head2head-goal-setter';
import { gameHomePage } from '../game-home/game-home';
import { SquadupModalPage } from '../squadup-modal/squadup-modal';
import { PlayerProfilePage } from '../player-profile/player-profile';

import { StorePage } from '../store/store';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'page-head2head-game',
	templateUrl: 'head2head-game.html',
	providers: [confettiAnimationService]
})
export class Head2headGamePage {

	@ViewChild(Head2headContentComponent) head2headContentComponent: Head2headContentComponent;
	@ViewChild(Head2headSearchOpponentComponent) head2headSearchOpponentComponent : Head2headSearchOpponentComponent;
	@ViewChild(Head2headGoalSetterComponent) head2headGoalSetterComponent : Head2headGoalSetterComponent;

	private state = 'NORMAL';
	private disablePlayButton = true;
	private disableBackButton = false;
	private gameRewardDetails = { stageNumber: 4, grandPrize: 20, prizePerStage: 4, backgroundImage: "assets/images/head2head/game-poster.png" };
	private balance: any = { balance1: 7, balance2: 24, balance3: 36 };
	private ownInformation = { avatarImage : 'assets/images/profile/avatar2.svg', name : 'Amari-Jade', avatarCountryImage : 'assets/images/contest/uk.png', stars: 4, badges : 2, level : 'AMATEUR' };
	private opponentInformation = {unknown: false, avatarImage : 'assets/images/profile/avatar5.svg', name : 'Nat Natty', avatarCountryImage : 'assets/images/contest/in.png', stars: '4', badges : '2', level : 'AMATEUR' };
	private ownScore =  [ { label: 'points', value: 1200 }, { label: 'times', value: 60 }, { label: 'moves', value: 47 }, { label: 'attacks', value: 34 }];
	private opponentScore =  [ { label: 'points', value: 1600 }, { label: 'times', value: '1.20' }, { label: 'moves', value: 32 }, { label: 'attacks', value: 45 }];
	private game = {
		information: { entryFee: 10, gameIcon: 'assets/images/head2head/game-icon.png', backgroundImage: 'assets/images/head2head/game-background.png', stars: 4, badges: 5, name: 'Candy Streak'},
		playerRank: 'PRO'
	};
	private how_to_play: any = {
		title: "Head2Head",
		description: "<p><strong>Head 2 Head</strong> is where you can play random players or people you know in a one on one highest scoring game.</p><p>You set the amount of tokens you wish to wager and play. You have one chance to submit your best score, if it beats your opponents then you are the winner.</p>",
		class: "replay"
	}

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private view: ViewController,
		private confettiAnimation: confettiAnimationService,
		private events: Events,
		private alert : AlertController,
		private modal : ModalController,
		private ele : ElementRef,
		private soundProvider : clickSoundProvider
	) {
		this.events.subscribe('head2head-game:won', this.onGameWin);
		this.events.subscribe('head2head-game:lose', this.onGameLose);
		this.events.subscribe('head2head-game:wait-after-game', this.onGameAwait);

	}

	countDownAboutToOver(){
		setTimeout(()=>{
			this.head2headSearchOpponentComponent.stopSoundLoop();
		},1000);
		this.head2headSearchOpponentComponent.countDownIsAboutToOver();
	}

	startPlayingGame() {

		if(this.disablePlayButton == true) return;

		if(this.state == 'NORMAL'){
			return this.setWaitBeforeGameState();
		}
		
		this.goToGameWebView();
	}

	goToGameWebView(){
		this.navCtrl.push(GameWebviewPage, {
			winEventName: 'head2head-game:won',
			loseEventName: 'head2head-game:lose',
			waitAfterEventName: 'head2head-game:wait-after-game'
		}).then(() => {
			this.setNormalState();
		});
	}

	setWaitBeforeGameState(){
		this.disableBackButton = true;
		this.soundProvider.stopResultSound();
		this.state = 'WAIT_BEFORE_GAME';
		setTimeout(()=>{
			this.head2headContentComponent.setWaitBeforeGameState();
		},0);
	}

	setNormalState() {
		this.disableBackButton = false;
		this.soundProvider.stopResultSound();
		this.state = 'NORMAL';
		this.disablePlayButton = true;
		this.head2headContentComponent.setNormalState();
	}

	setWinState() {
		this.soundProvider.playHead2HeadGameWinSound(()=>{
			this.soundProvider.playResultSound();
		});
		this.head2headContentComponent.setStateToWin();
	}

	setLoseState() {
		this.soundProvider.stopResultSound();
		this.head2headContentComponent.setStateToLost();
	}

	ngAfterViewInit() {
		this.confettiAnimation.setView(this.view.pageRef());
	}

	private restartGame(){
		this.setNormalState();
	}

	private doDisablePlayButton(status) {
		this.disablePlayButton = status;
	}

	private togglePlayState(ev){
		this.disablePlayButton = !ev;
	}

	private onGameWin = (param) => {

		this.disableBackButton = true;
		this.makeOpponentKnown();
		this.state = 'WON';
		if (param.start == true) {
			this.setWinState();
		} else {
			this.confettiAnimation.startAnimation();
		}
	}

	private onGameLose = (param) => {
		this.disableBackButton = true;
		this.makeOpponentKnown();
		if (param.start == false)
			return;

		this.state = 'LOSE';
		this.setLoseState();
	}

	private onGameAwait = (param) => {
		this.disableBackButton = true;
		this.makeOpponentAnonymous();

		if(param.start == false){
			return;
		}
		this.state = 'WAIT_AFTER_GAME';
		this.soundProvider.playResultSound();
		this.head2headContentComponent.setWaitAfterGameState();
	}


	private makeOpponentAnonymous(){
		this.opponentInformation.unknown = true;
	}

	private makeOpponentKnown(){
		this.opponentInformation.unknown = false;
	}

	private goToGameHomePage() {
		this.navCtrl.setRoot(gameHomePage,{},{animate:true});
	}

	private changePlayButtonToNew(){
		this.disablePlayButton = false;
		this.head2headContentComponent.changePlayButtonToNew();
	}

	private changePlayButtonToCollect(){
		this.disablePlayButton = false;
		this.head2headContentComponent.changePlayButtonToCollect();
	}

	showExitModal(){

		this.head2headGoalSetterComponent.pauseCountdown();

		let alert = this.alert.create({
			title : 'Do you wish to cancel this match?',
			buttons : [{
				text : 'Yes',
				handler : ()=>{
					this.head2headSearchOpponentComponent.stopSoundLoop();
					this.navCtrl.setRoot(Head2headGamePage);
				}
			},{
				text : 'No',
				handler : ()=>{
					this.head2headGoalSetterComponent.resumeCountdown();
				}
			}]
		});

		alert.present();


	}

	private showSquadupModal(){

		this.head2headSearchOpponentComponent.stopSoundLoop();
		this.head2headGoalSetterComponent.pauseCountdown();
		
		let modal = this.modal.create(SquadupModalPage,{mode : "CHALLANGE"});
		modal.present();
		modal.onDidDismiss(()=>{
			this.head2headSearchOpponentComponent.startSoundLoop();
			this.head2headGoalSetterComponent.resumeCountdown();
		});
	
	}

	ionViewWillUnload() {
		this.soundProvider.stopResultSound();
		if(this.head2headSearchOpponentComponent){
			this.head2headSearchOpponentComponent.stopSoundLoop();
		}
		
		this.events.unsubscribe('head2head-game:won', this.onGameWin);
		this.events.unsubscribe('head2head-game:lose', this.onGameLose);
		this.events.unsubscribe('head2head-game:wait-after-game', this.onGameAwait);
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

}