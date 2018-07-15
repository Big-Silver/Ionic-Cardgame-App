import { Component, Input } from '@angular/core';

@Component({
	selector: 'stage-result-leaderboard',
	templateUrl: 'stage-result-leaderboard.html'
})
export class StageResultLeaderboardComponent {

	@Input() highRankedPlayers = [];
	@Input() lowRankedPlayers = [];

	constructor() {
	}

}
