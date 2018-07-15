import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'winner-player',
	templateUrl: 'winner-player.html'
})
export class WinnerPlayerComponent {

	@Output() playerProfileTapped : EventEmitter<any> = new EventEmitter();

	@Input() playerData = {};
	@Input() color = '';

	constructor() {
	}

}
