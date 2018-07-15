import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'player-result-winning',
  templateUrl: 'player-result-winning.html'
})
export class PlayerResultWinningComponent {

	@Input() data  = {};
	@Input() ownSlot = false;
	@Input() color = 'dark';

	@Output() playerProfileTapped : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
