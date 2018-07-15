import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'player-result',
	templateUrl: 'player-result.html'
})
export class PlayerResultComponent {

	@Input() data  = {};
	@Input() ownSlot = false;
	@Input() color = 'dark';

	@Output() playerProfileTapped : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
