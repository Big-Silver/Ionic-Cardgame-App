import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { NavController, NavParams, Events, ViewController, ModalController } from 'ionic-angular';

import { confettiAnimationService } from '../../animation/confetti';

import { GameWebviewPage } from '../game-webview/game-webview';
import { ArcadeContentComponent } from '../../components/arcade-content/arcade-content';
import { gameHomePage  } from '../game-home/game-home';
import { StorePage } from '../store/store';
import { HowToPlayPage } from '../how-to-play/how-to-play';

import { clickSoundProvider } from '../../providers/click';
import { OutcomeBeforeResultPage } from '../outcome-before-result/outcome-before-result';

@Component({
	selector: 'page-arcade-game',
	templateUrl: 'arcade-game.html',
	providers: [confettiAnimationService]
})
export class ArcadeGamePage implements AfterViewInit {

	@ViewChild(ArcadeContentComponent) arcadeContentComponent : ArcadeContentComponent;
	private state = 'NORMAL';
	private disablePlayButton = false;
	private disableBackButton = false;
	private game = { 
		information: { 
			entryFee : 1,
			gameIcon : 'assets/images/arcade/game-icon.png',
			backgroundImage : 'assets/images/arcade/game-background.jpg',
			stars : 4,
			badges : 5,
			name : 'Merji'
		},
		playerRank: 'EXPERT'
	};
	private gameRewardDetails = {
		stageNumber : 4,
		grandPrize : 20,
		prizePerStage : 4,
		backgroundImage : "assets/images/arcade/game-poster.png"
	};
	private balance: any = {
		balance1 : 7,
		balance2 : 24,
		balance3 : 36
	};
	private how_to_play: any = {
		title: "Arcade",
		description: "<p><strong>Arcade</strong> is a mode that can be played at anytime as long as you have enough tokens to play. If you complete all stages/levels set you will be awarded a cash prize.</p><p>As you progress thru the levels you will unlock other game modes and special gifts.</p><p>You can use helper bots to aid you in achieving your target.</p>",
		class: "arcade"
	}
	
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private view: ViewController,
		private confettiAnimation: confettiAnimationService,
		private events : Events,
		private modal : ModalController,
		private ele : ElementRef,
		private soundProvider : clickSoundProvider
	) {	
		this.events.subscribe('arcade-game:won', this.onGameWin);
		this.events.subscribe('arcade-game:lose', this.onGameLose);
	}

	startPlayingGame() {

		this.navCtrl.push(GameWebviewPage, { 
			winEventName : 'arcade-game:won',
			loseEventName : 'arcade-game:lose',
			gameUrl : (this.navParams.data && this.navParams.data.gameUrl) ? this.navParams.data.gameUrl : false,
			orientation : this.navParams.data && this.navParams.data.orientation ? this.navParams.data.orientation : 'portrait'
		}).then(()=>{
			this.startNormalAnimation();
		});
	}

	private onGameWin = (param) => {

		if(param.outcome)
			this.openOutcomeScreen(param.outcome, param.mode);

		this.disableBackButton = true;
		this.state = 'WON';
		this.soundProvider.playArcadeGameWinSound(()=>{
			this.soundProvider.playResultSound();
		});

		if(param.start == true){
			this.startWinAnimation();
		}else{
			this.confettiAnimation.startAnimation();
		}
	}

	private onGameLose = (param) => {

		if(param.outcome)
			this.openOutcomeScreen(param.outcome, param.mode);

		this.disableBackButton = true;
		if(param.start == false)
			return;
		
		this.state = 'LOSE';
		this.soundProvider.playArcadeGameLoseSound(()=>{
			this.soundProvider.playResultSound();
		});
		setTimeout(()=>{
			this.startLoseAnimation();
		},0);
	}

	private goToGameHomePage(){
		this.navCtrl.setRoot(gameHomePage,{},{animate:true});
	}

	startNormalAnimation(){
		this.disableBackButton = false;
		this.soundProvider.stopResultSound();
		this.state = 'NORMAL';
		this.arcadeContentComponent.setNormalState();
	}

	startWinAnimation() {
		this.arcadeContentComponent.setStateToWin();
	}

	startLoseAnimation(){
		this.arcadeContentComponent.setStateToLost();
	}

	ngAfterViewInit(){
		this.confettiAnimation.setView(this.view.pageRef());
	}

	ionViewWillUnload(){
		this.soundProvider.stopResultSound();
		this.events.unsubscribe('arcade-game:won', this.onGameWin);
		this.events.unsubscribe('arcade-game:lose', this.onGameLose);
	}

	doDisablePlayButton(status){
		this.disablePlayButton = status;
	}

	openStoreScreen(){
		this.navCtrl.push(StorePage,{parentNativeElement : this.ele.nativeElement});
	}

	openHowToPlay(){
		let modal = this.modal.create(HowToPlayPage, { data: this.how_to_play});
		modal.present();
	}


	openOutcomeScreen(outcome, mode){
		let modal = this.modal.create(OutcomeBeforeResultPage,{
			outcome : outcome,
			mode : mode
		},{
			cssClass : 'outcome-before-result-modal',
			enableBackdropDismiss : false
		});
		modal.present({
			animate : true,
			animation : 'wp-transition'
		});
	}

}
