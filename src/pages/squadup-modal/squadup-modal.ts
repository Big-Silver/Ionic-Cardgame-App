import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { PlayerProfilePage } from '../player-profile/player-profile';

@Component({
	selector: 'page-squadup-modal',
	templateUrl: 'squadup-modal.html',
})
export class SquadupModalPage {

	private players = [];
	private maxSelection = 0;
	private alreadySelected  = 0;
	private mode = '';

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private statusBar : StatusBar,
		private view : ViewController,
		private modal : ModalController
	) {
		this.addPlayers();
		// this.navParams.data = {
		// 	mode : "CHALLANGE"
		// };
		this.maxSelection = 1;
		this.mode = this.navParams.data.mode;
		if(this.navParams.data.mode == "SQUADUP")
			this.maxSelection = 5;

	}

	private addPlayers(){

		this.players = [
			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar2.svg',name:'Nat Natty',amount:'400',online:true},
			{image:'assets/images/profile/avatar3.svg',name:'Amari Jade',amount:'1.6k'},
			{image:'assets/images/profile/avatar4.svg',name:'Amari Jade',amount:'276',online:true},
			{image:'assets/images/profile/avatar5.svg',name:'Amari Jade',amount:'687'},

			{image:'assets/images/profile/avatar7.svg',name:'Amari Jade',amount:'1.85k'},
			{image:'assets/images/profile/avatar6.svg',name:'Amari Jade',amount:'82.83k'},
			{image:'assets/images/profile/avatar8.svg',name:'Amari Jade',amount:'65',online:true},
			{image:'assets/images/profile/avatar9.svg',name:'Amari Jade',amount:'16'},
			{image:'assets/images/profile/avatar10.svg',name:'Amari Jade',amount:'555',online:true},

			{image:'assets/images/profile/avatar11.svg',name:'Amari Jade',amount:'3.98'},
			{image:'assets/images/profile/avatar12.svg',name:'Amari Jade',amount:'9'},
			{image:'assets/images/profile/avatar13.svg',name:'Amari Jade',amount:'256'},
			{image:'assets/images/profile/avatar14.svg',name:'Amari Jade',amount:'10.75'},
			{image:'assets/images/profile/avatar15.svg',name:'Amari Jade',amount:'2.65m'},

			{image:'assets/images/profile/avatar16.svg',name:'Amari Jade',amount:'4.7k'},
			{image:'assets/images/profile/avatar17.svg',name:'Amari Jade',amount:'82.83k'},
			{image:'assets/images/profile/avatar18.svg',name:'Amari Jade',amount:'256'},
			{image:'assets/images/profile/avatar19.svg',name:'Amari Jade',amount:'65'},
			{image:'assets/images/profile/avatar20.svg',name:'Amari Jade',amount:'16'},

			{image:'assets/images/profile/avatar11.svg',name:'Amari Jade',amount:'3.98'},
			{image:'assets/images/profile/avatar12.svg',name:'Amari Jade',amount:'9'},
			{image:'assets/images/profile/avatar13.svg',name:'Amari Jade',amount:'256'},
			{image:'assets/images/profile/avatar14.svg',name:'Amari Jade',amount:'10.75'},
			{image:'assets/images/profile/avatar15.svg',name:'Amari Jade',amount:'2.65m'},

			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k'},
			{image:'assets/images/profile/avatar2.svg',name:'Nat Natty',amount:'400'},
			{image:'assets/images/profile/avatar3.svg',name:'Amari Jade',amount:'1.6k'},
			{image:'assets/images/profile/avatar4.svg',name:'Amari Jade',amount:'276'},
			{image:'assets/images/profile/avatar5.svg',name:'Amari Jade',amount:'687'},
		];


	}

	selectedPlayerChanged(numberOfPlayers){
		this.alreadySelected = numberOfPlayers;
	}

	ionViewDidEnter(){
	}

	dismissView(){
		this.view.dismiss();
	}

	openPlayerProfile(){
		this.modal.create(PlayerProfilePage).present({animate:false});
	}

}
