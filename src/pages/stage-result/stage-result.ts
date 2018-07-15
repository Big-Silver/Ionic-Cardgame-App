import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CurtainComponent } from '../../components/curtain/curtain';
import { StageResultGameInfoComponent } from '../../components/stage-result-game-info/stage-result-game-info';

@Component({
	selector: 'page-stage-result',
	templateUrl: 'stage-result.html',
})
export class StageResultPage {


	@ViewChild(CurtainComponent) curtain :CurtainComponent;
	@ViewChild(StageResultGameInfoComponent) stageResultGameInfo  : StageResultGameInfoComponent;

	private rankingPlayers = {
		upperPlayers : [],
		lowerPlayers : []
	};

	private curtainActive = true;
	private mode = 'WIN';

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController
	) {
		if(this.navParams.data && this.navParams.data.mode){
			this.mode = this.navParams.data.mode;
		}
	}

	ionViewDidLoad() {
	}

	ionViewDidEnter(){
		this.setPlayersForRanking();
		setTimeout(()=>{
			this.curtain.doRemoveCurtain();
		},2500);
	}

	setPlayersForRanking(){

		let players = [];

		players.push({ name : 'Amari-jade232', attempt : '23', top : '10', score : '1', profile : 'assets/images/profile/avatar1.svg', isOwn : false, isSilver : false});
		players.push({ name : 'Amari-jade232', attempt : '49', top : '20', score : '1', profile : 'assets/images/profile/avatar2.svg', isOwn : false, isSilver : false});
		players.push({ name : 'Amari-jade232', attempt : '34', top : '40', score : '1', profile : 'assets/images/profile/avatar4.svg', isOwn : this.mode == "WIN", isSilver : false });
		players.push({ name : 'Amari-jade232', attempt : '12', top : '30', score : '1', profile : 'assets/images/profile/avatar3.svg', isOwn : false, isSilver : false});

		this.rankingPlayers.upperPlayers = players;

		players = [];

		players.push({ name : 'Amari-jade232', attempt : '23', top : '50', score : '1', profile : 'assets/images/profile/avatar5.svg', isOwn : this.mode == "LOSE", isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '49', top : '60', score : '1', profile : 'assets/images/profile/avatar6.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '12', top : '70', score : '1', profile : 'assets/images/profile/avatar7.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '34', top : '80', score : '1', profile : 'assets/images/profile/avatar8.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '34', top : '90', score : '1', profile : 'assets/images/profile/avatar9.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '34', top : '95', score : '1', profile : 'assets/images/profile/avatar10.svg', isOwn : false, isSilver : true });

		this.rankingPlayers.lowerPlayers = players;

	}

	disableCurtain(){
		this.curtainActive = false;
	}

	dismissView(){
		this.view.dismiss();
	}

}
