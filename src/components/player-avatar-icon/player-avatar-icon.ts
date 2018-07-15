import { Component, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'player-avatar-icon',
	templateUrl: 'player-avatar-icon.html'
})
export class PlayerAvatarIconComponent {

	private _playerInformation = {};
	@Input() unknownImage = 'assets/images/profile/anonymous_player.png';
	@Input() unknownText = '?';

	@Input() set playerInformation(value){
		if(!value){
			this._playerInformation = {};
			return;
		}
		
		this._playerInformation = value;
	}	

	@Input() invertFlag = '';
	@Input() unknown = '';



	constructor(
		public element : ElementRef
	){
	}

}
