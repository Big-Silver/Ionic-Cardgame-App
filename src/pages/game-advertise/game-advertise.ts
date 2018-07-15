import { Component } from '@angular/core';
import { NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { gameHomePage } from '../../pages/game-home/game-home';

import { StageResultPage } from '../../pages/stage-result/stage-result';
import { StagePage } from '../../pages/stage/stage';
import { WinningAnimationScreenPage } from '../../pages/winning-animation-screen/winning-animation-screen';
 
@Component({
	selector: 'page-game-advertise',
	templateUrl: 'game-advertise.html',
})
export class GameAdvertisePage {

	private winEventName : string = '';
	private loseEventName : string = '';
	private waitAfterEventName : string = '';

	private showLose = false;
	private showAwait = false;
	private winWithPosition =  false;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private modal : ModalController,
		private events : Events
	) {
		this.winEventName = this.navParams.data.winEventName;
		this.loseEventName = this.navParams.data.loseEventName;
		this.waitAfterEventName = this.navParams.data.waitAfterEventName;

		if(this.loseEventName == 'head2head-game:lose' || this.loseEventName == 'arcade-game:lose'){
			this.showLose = true;
		}

		if(this.winEventName == 'replay-game:won' || this.winEventName == 'contest-game:won'){
			this.winWithPosition = true;
		}

		if(this.waitAfterEventName && this.waitAfterEventName == 'head2head-game:wait-after-game'){
			this.showAwait = true;
		}

	}

	ionViewDidLoad() {
	}

	gameWon(){

		if(this.winEventName == 'instant-game:won'){
			this.navCtrl.setRoot(gameHomePage,{},{direction:'forward'})
			return;
		}

		if(this.winEventName == 'arcade-game:won'){
			this.navCtrl.push(StagePage);
			return;
		}

		this.events.publish(this.winEventName,{start : true});
		this.popThis().then(()=>{
			this.events.publish(this.winEventName,{start : false});
		});
	}

	gameLose(){
		this.events.publish(this.loseEventName,{ start : true});
		this.popThis().then(()=>{
			this.events.publish(this.loseEventName,{ start : false});
		});
	}

	gameAwait(){
		this.events.publish(this.waitAfterEventName, {start : true});
		this.popThis().then(()=>{
			this.events.publish(this.waitAfterEventName,{ start : false});
		});
	}

	wonOnPosition(position){
		this.events.publish(this.winEventName, {start : true});
		this.popThis().then(()=>{
			this.events.publish(this.winEventName, {start : false, position : position});
		});
	}

	popThis(){
		return this.navCtrl.popToRoot({direction:'forward'});
	}

	goToResultWinScreen(){
		this.modal.create(StageResultPage,{
			mode : "WIN"
		}).present();
	}

	goToResultLoseScreen(){
		this.modal.create(StageResultPage,{
			mode : "LOSE"
		}).present();
	}

	goToWinningAnimationScreen(){
		let modal = this.modal.create(WinningAnimationScreenPage).present();
	}

	gameWonWithOutcome(outcome){
		this.events.publish(this.winEventName,{start : true, outcome : outcome, mode : "WON"});
		this.popThis().then(()=>{
			this.events.publish(this.winEventName,{start : false});
		});
	}

	gameLoseWithOutcome(outcome){
		this.events.publish(this.loseEventName,{start : true, outcome : outcome, mode : "LOSE"});
		this.popThis().then(()=>{
			this.events.publish(this.loseEventName,{start : false});
		});
	}

}
