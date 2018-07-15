import { Component, ViewChild, ElementRef, AfterViewInit, ComponentRef } from '@angular/core';
import { PlayerAvatarIconComponent } from '../player-avatar-icon/player-avatar-icon';

@Component({
	selector: 'winning-animation-footer',
	templateUrl: 'winning-animation-footer.html'
})
export class WinningAnimationFooterComponent implements AfterViewInit {

	private firstPlayerInformation = { 
		avatarImage : 'assets/images/profile/avatar2.svg', 
		name : 'Amari-Jade', 
		avatarCountryImage : 'assets/images/contest/uk.png'
	};

	private secondPlayerInformation = {
		avatarImage : 'assets/images/profile/avatar2.svg', 
		name : 'Amari-Jade', 
		avatarCountryImage : 'assets/images/contest/uk.png'
	};

	private thirdPlayerInformation = {
		avatarImage : 'assets/images/profile/avatar2.svg', 
		name : 'Amari-Jade', 
		avatarCountryImage : 'assets/images/contest/uk.png'
	};
	
	private firstPositionSet = false;
	private secondPositionSet = false;
	private thirdPositionSet = false;
	private data = { 
		mode:'HEAD2HEAD', 
		disabled:false, 
		difficulty:'EXPERT', 
		name:'Candy Streak',
		image:'assets/images/home/small-games/candystreak.png' 
	};
	

	constructor() {
	}

	plyerAdded(playerInformation){
		if(this.firstPositionSet == false){
			this.firstPlayerInformation.avatarImage = playerInformation.playerImage;
			this.firstPlayerInformation.avatarCountryImage = playerInformation.flagImage;
			this.firstPlayerInformation.name = playerInformation.name;
			this.firstPositionSet = true;
			return;
		}

		if(this.secondPositionSet == false){
			this.secondPlayerInformation.avatarImage = playerInformation.playerImage;
			this.secondPlayerInformation.avatarCountryImage = playerInformation.flagImage;
			this.secondPlayerInformation.name = playerInformation.name;
			this.secondPositionSet = true;
			return;
		}
		if(this.thirdPositionSet == false){
			this.thirdPlayerInformation.avatarImage = playerInformation.playerImage;
			this.thirdPlayerInformation.avatarCountryImage = playerInformation.flagImage;
			this.thirdPlayerInformation.name = playerInformation.name;
			this.thirdPositionSet = true;
			return;
		}
	}

	isOver(){
		return (this.firstPositionSet == true && this.secondPositionSet == true && this.thirdPositionSet == true);
	}

	ngAfterViewInit(){

	}

}
