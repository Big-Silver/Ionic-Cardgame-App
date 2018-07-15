import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PlayerProfilePage } from '../player-profile/player-profile';

@Component({
	selector: 'page-winner',
	templateUrl: 'winner.html',
})
export class WinnerPage {

	private players = [];


	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private modal : ModalController
	) {
		this.setPlayers();
	}

	ionViewDidEnter(){
		this.setImages();
	}

	openPlayerProfile(){
		this.modal.create(PlayerProfilePage).present({animate:false});
	}

	private setPlayers(){

		let i = 0;
		while(i<21){
			i++;
			this.players.push({
				profile : '',
				flag : 'assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
				name : 'Player '+i,
				time : i+ ' seconds ago',
				price : i*100
			});
		}

	}

	private setImages(){
		this.players.forEach((e,index)=>{
			e.profile = 'assets/images/profile/avatar'+(index+1)+'.svg';
		});
	}


	private dismissView(){
		this.view.dismiss();
	}

}
