import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'squadup-player-icon',
	templateUrl: 'squadup-player-icon.html'
})
export class SquadupPlayerIconComponent {

	@Input() playerDetail : any = {};
	@Input() withFollowButton = false;
	@Input() withProfileViewButton = false;
	@Input() withNewLabel = false;
	@Input() isFamous = false;

	@Output() imageTapped : EventEmitter<any> = new EventEmitter();
	@Output() profileViewTapped : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

	changeFollowingState(){
		this.playerDetail.isFollowing = this.playerDetail.isFollowing ? false : true;

	}

}
