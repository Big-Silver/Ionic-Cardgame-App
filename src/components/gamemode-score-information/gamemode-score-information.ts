import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'gamemode-score-information',
	templateUrl: 'gamemode-score-information.html'
})
export class GamemodeScoreInformationComponent {

	@Input() scoreRows : Array<any> = new Array<any>();
	@Input() playerInformation : Array<any> = new Array<any>();
	@Input() replayInformation : any = {};
	@Input() gameMode = '';

	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();

	private scoreInformation = {};

	constructor() {
		let init = 0;
	}

	viewPlayerProfile(){
		this.openPlayerProfile.emit();
	}

}
