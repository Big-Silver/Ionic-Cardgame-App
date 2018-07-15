import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PlayerProfilePage } from '../player-profile/player-profile';

import { BattleAFriendPage } from '../battle-a-friend/battle-a-friend';
import { SquadupRequestPage } from '../squadup-request/squadup-request';

@Component({
	selector: 'page-inbox',
	templateUrl: 'inbox.html',
})
export class InboxPage {

	private isFirstTime = true;

	private activeMode = 'RESULTS';
	private inboxResultsSlot = [];
	private filteredInboxResultsSlot = [];
	private inboxRequestSlot = [];
	private inboxPromotionsSlot = [];



	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private modal : ModalController
	) {
		
	}

	ionViewDidLoad() {
	}

	activeTabChanged(activeMode){
		this.activeMode = activeMode;
	}

	doFilter(gameType){

		if(gameType == "ALL"){
			return this.filteredInboxResultsSlot = this.inboxResultsSlot;
		}
		if(gameType == "RECENT"){
			return this.filteredInboxResultsSlot = JSON.parse(JSON.stringify(this.inboxResultsSlot.slice(0, this.inboxResultsSlot.length/2)));
		}
		this.filteredInboxResultsSlot = JSON.parse(JSON.stringify(this.inboxResultsSlot.filter((ele : any)=>{
			return  gameType == ele.gameType;
		}).map((e)=>{
			e.randomizer = Math.random();
			return e;
		})));

	}

	dismissView(){
		this.view.dismiss();
	}

	openPlayerProfile(){
		this.modal.create(PlayerProfilePage).present({animate:false});
	}

	handleGameRequest(slot){

		let componentToPush : any = BattleAFriendPage;

		if(slot.mode == "SQUADUP"){
			componentToPush = SquadupRequestPage;
		}

		this.navCtrl.push(componentToPush);

	}

	ionViewDidEnter(){

		if(this.isFirstTime == false)
			return;

		if(this.isFirstTime == true)
			this.isFirstTime = false;

		this.inboxResultsSlot = [
			{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'CONTEST',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '10:02:03',
				rematch : false,
				next : true,
				result : "UP"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'HEAD2HEAD',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '01:02:03',
				rematch : true,
				result : "LOST"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'CONTEST',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '04:02:03',
				rematch : false,
				result : "WON"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'REPLAY',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '04:52:03',
				rematch : false,
				next : true,
				result : "UP"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'HEAD2HEAD',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '04:50:36',
				rematch : true,
				result : "LOST"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'HEAD2HEAD',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '08:00:00',
				rematch : true,
				result : "WON"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'HEAD2HEAD',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '09:05:36',
				rematch : true,
				result : "LOST"
			},{
				playerInformation : {
					avatarImage : 'assets/images/profile/avatar1.svg',
					avatarCountryImage : 'assets/images/flag/gb.svg',
					name : 'Amari-jade'
				},
				gameType : 'CONTEST',
				id : '123456',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				date : '20-05-17',
				time : '09:44:36',
				rematch : true,
				result : "WON"
			}
		];

		this.filteredInboxResultsSlot = this.inboxResultsSlot;
	
		this.inboxRequestSlot = [
			{
				playerName : 'Natty Nat',
				profile : 'assets/images/profile/avatar1.svg',
				gameIcon : 'assets/images/home/small-games/angryvegan.png',
				mode : 'SQUADUP',
				type : 'INVITE',
				hoursLeft : 5
			},{
				playerName : 'Natty Nat',
				profile : 'assets/images/profile/avatar1.svg',
				gameIcon : 'assets/images/home/small-games/candystreak.png',
				mode : 'HEAD2HEAD',
				type : 'REQUEST',
				hoursLeft : 4
			},{
				playerName : 'Natty Nat',
				profile : 'assets/images/profile/avatar1.svg',
				gameIcon : 'assets/images/home/small-games/cheezywords.png',
				mode : 'SQUADUP',
				type : 'INVITE',
				hoursLeft : 3
			},{
				playerName : 'Natty Nat',
				profile : 'assets/images/profile/avatar1.svg',
				gameIcon : 'assets/images/home/small-games/lifes_a_beach.png',
				mode : 'HEAD2HEAD',
				type : 'REQUEST',
				hoursLeft : 2
			},{
				playerName : 'Natty Nat',
				profile : 'assets/images/profile/avatar1.svg',
				gameIcon : 'assets/images/home/small-games/skullsland.png',
				mode : 'SQUADUP',
				type : 'INVITE',
				hoursLeft : 5
			},{
				playerName : 'Natty Nat',
				profile : 'assets/images/profile/avatar1.svg',
				gameIcon : 'assets/images/home/small-games/smashyblockz.png',
				mode : 'SQUADUP',
				type : 'INVITE',
				hoursLeft : 1
			}
		];
	
		this.inboxPromotionsSlot = [{
				background : 'assets/images/inbox/just_eat.png',
				amount : '50k',
				time : '3500'
			},{
				background : 'assets/images/inbox/queen.png',
				amount : '2.5k',
				time : '7500'
			},{
				background : 'assets/images/inbox/just_eat.png',
				amount : '1.2k',
				time : '3500'
			},{
				background : 'assets/images/inbox/queen.png',
				amount : '2m',
				time : '9874'
			},{
				background : 'assets/images/inbox/just_eat.png',
				amount : '22k',
				time : '1589'
			},{
				background : 'assets/images/inbox/queen.png',
				amount : '41k',
				time : '4567'
			},{
				background : 'assets/images/inbox/just_eat.png',
				amount : '1.2k',
				time : '8523'
			}
		];

	}

}
