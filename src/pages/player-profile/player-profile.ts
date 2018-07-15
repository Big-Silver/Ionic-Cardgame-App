import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LeaderboardPage } from '../leaderboard/leaderboard';

@Component({
	selector: 'page-player-profile',
	templateUrl: 'player-profile.html',
})
export class PlayerProfilePage {

	private personalInformation = {
		profile : 'assets/images/profile/avatar1.svg',
		country : 'assets/images/contest/in.png',
		gender : 'MALE',
		name : 'Natty Nat',
		totalWins : 190,
		playerId : 28290,
		doesFollowMe : true,
		fame : '100',
		fighters : '100',
		followers : '17',
		following : '9'
	};

	private highestPosition = {
		gameIcon : 'assets/images/home/small-games/cheezywords.png',
		gameName : 'Cheesy Words',
		top : '30'
	};

	private popularity = {
		fame : 100,
		fighter : 100
	};

	private mostPlayed = {
		gameIcon : 'assets/images/home/small-games/smashyblockz.png',
		gameName : 'Smacky Blockz'
	};

	private playedGames = [
		{icon:'assets/images/home/small-games/angryvegan.png',stars:4,badges:2,level:'EXPERT',name:'Angry Vegan'},
		{icon:'assets/images/home/small-games/candystreak.png',stars:4,badges:2,level:'AMATEUR',name:'Candy Streak'},
		{icon:'assets/images/home/small-games/cheezywords.png',stars:4,badges:2,level:'PRO',name:'Cheezy Words'}
	];

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private statusBar : StatusBar,
		private modal : ModalController
	) {
	}

	dismissModal(){
		this.view.dismiss({},'',{
			animate : false
		});
	}

	onPopularitySlideTapped(){
		this.navCtrl.push(LeaderboardPage,{},{disableApp:true});
	}


}
