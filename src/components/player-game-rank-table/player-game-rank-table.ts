import { Component, Input } from '@angular/core';


@Component({
	selector: 'player-game-rank-table',
	templateUrl: 'player-game-rank-table.html'
})
export class PlayerGameRankTableComponent {

	@Input() level = '';
	@Input() stars = '';
	@Input() badges = '';
	@Input() unknown = false;

	constructor() {
	}

}
