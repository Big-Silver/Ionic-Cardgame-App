import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
	selector: 'page-ranking-modal',
	templateUrl: 'ranking-modal.html',
})
export class RankingModalPage {

	@ViewChild('content') content : Content;

	private activatedScreen = "TRENDING";
	private rankingPlayers = {
		upperPlayers : [],
		lowerPlayers : []
	};

	private trendingPlayers = {
		upperPlayers : [],
		lowerPlayers : []
	}

	private squadUpPlayers = {
		players : []
	}


	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private statusBar : StatusBar
	) {

		this.setPlayersForRanking();
		this.setPlayersForTrending();
		this.setPlayersForSquadup();

	}

	changeScreen(screenName){
		this.activatedScreen = screenName;
	}

	setPlayersForRanking(){

		let players = [];

		players.push({ name : 'Amari-jade232', attempt : '23', top : '10', score : '1', profile : 'assets/images/profile/avatar1.svg', isOwn : false, isSilver : false});
		players.push({ name : 'Amari-jade232', attempt : '49', top : '20', score : '1', profile : 'assets/images/profile/avatar2.svg', isOwn : false, isSilver : false});
		players.push({ name : 'Amari-jade232', attempt : '34', top : '40', score : '1', profile : 'assets/images/profile/avatar4.svg', isOwn : true, isSilver : false,  progressType : "UPARROW" });
		players.push({ name : 'Amari-jade232', attempt : '12', top : '30', score : '1', profile : 'assets/images/profile/avatar3.svg', isOwn : false, isSilver : false});

		this.rankingPlayers.upperPlayers = players;

		players = [];

		players.push({ name : 'Amari-jade232', attempt : '23', top : '50', score : '1', profile : 'assets/images/profile/avatar5.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '49', top : '60', score : '1', profile : 'assets/images/profile/avatar6.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '12', top : '70', score : '1', profile : 'assets/images/profile/avatar7.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '34', top : '80', score : '1', profile : 'assets/images/profile/avatar8.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '34', top : '90', score : '1', profile : 'assets/images/profile/avatar9.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '34', top : '95', score : '1', profile : 'assets/images/profile/avatar10.svg', isOwn : false, isSilver : true });

		this.rankingPlayers.lowerPlayers = players;

	}

	setPlayersForTrending(){

		let players = [];
		
		players.push({ name : 'Amari-jade232', attempt : '', top : '10', score : '1', profile : 'assets/images/profile/avatar1.svg', isOwn : false, isSilver : false});
		players.push({ name : 'Amari-jade232', attempt : '', top : '40', score : '1', profile : 'assets/images/profile/avatar4.svg', isOwn : false, isSilver : false });

		this.trendingPlayers.upperPlayers = players;

		players = [];

		players.push({ name : 'Amari-jade232', attempt : '', top : '50', score : '1', profile : 'assets/images/profile/avatar5.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '', top : '60', score : '1', profile : 'assets/images/profile/avatar6.svg', isOwn : true, isSilver : true,  progressType : "UPARROW" });
		players.push({ name : 'Amari-jade232', attempt : '', top : '70', score : '1', profile : 'assets/images/profile/avatar7.svg', isOwn : false, isSilver : true});
		players.push({ name : 'Amari-jade232', attempt : '', top : '80', score : '1', profile : 'assets/images/profile/avatar8.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '', top : '90', score : '1', profile : 'assets/images/profile/avatar9.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '', top : '95', score : '1', profile : 'assets/images/profile/avatar10.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '', top : '90', score : '1', profile : 'assets/images/profile/avatar11.svg', isOwn : false, isSilver : true });
		players.push({ name : 'Amari-jade232', attempt : '', top : '95', score : '1', profile : 'assets/images/profile/avatar12.svg', isOwn : false, isSilver : true });

		this.trendingPlayers.lowerPlayers = players;

	}

	setPlayersForSquadup(){

		let players = [];

		players.push({ slotType : 'RANK', name : 'Natty Nat', rank : '1st', top : '20', score : '278', profile : 'assets/images/profile/avatar8.svg', isOwn : false, isBlue : true, progressType : "UPARROW", rankColor : "yellow" });
		players.push({ slotType : 'RANK', name : 'Batman28', rank : '2nd', top : '10', score : '224', profile : 'assets/images/profile/avatar9.svg', isOwn : false, isBlue : true, progressType : "NONE", rankColor : "blue" });
		players.push({ slotType : 'RANK', name : 'Amari-jade232', rank : '3rd', top : '50', score : '160', profile : 'assets/images/profile/avatar10.svg', isOwn : true, isBlue : true , progressType : "UPARROW", rankColor : "green" });
		players.push({ slotType : 'RANK', name : 'Catwoman', rank : '4th', top : '70', score : '156', profile : 'assets/images/profile/avatar11.svg', isOwn : false, isBlue : true, progressType : "DOWNARROW", rankColor : "purple"  });
		players.push({ slotType : 'RANK', name : 'Maxi Max', rank : '5th', top : '90', score : '57', profile : 'assets/images/profile/avatar12.svg', isOwn : false, isBlue : true, progressType : "DOWNARROW", rankColor : "red"  });

		this.squadUpPlayers.players = players;

	}

	closeModal(){
		this.view.dismiss();
	}


}