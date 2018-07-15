import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PlayerProfilePage } from '../../pages/player-profile/player-profile';

@Component({
	selector: 'winning-animation-second-screen-list',
	templateUrl: 'winning-animation-second-screen-list.html'
})
export class WinningAnimationSecondScreenListComponent {

	private players : Array<any> = new Array();
	private ownResult = {
		profile : 'assets/images/profile/avatar46.svg',
		flag : 'assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
		name : 'Player 46',
		score : '100',
		index : '25',
		prize : '20',
		currencyType : "POUND"
	};

	constructor(
		private modal : ModalController
	) {
		this.setPlayers();
	}


	private setPlayers(){
		let i = 0;
		while(i<12){
			i++;
			this.players.push({
				index : i,
				profile : 'assets/images/profile/avatar'+i+'.svg',
				flag : 'assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
				name : 'Player '+i,
				score : i*10,
				prize : i*50,
				currencyType : i % 2 == 0 ? "POUND" : "SILVER_TOKEN"
			});
		}
	}

	openPlayerProfile(){

		let modal = this.modal.create(PlayerProfilePage,{},{});
		modal.present();
		

	}

}
