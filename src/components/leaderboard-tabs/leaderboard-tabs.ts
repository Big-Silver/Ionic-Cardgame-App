import { Component } from '@angular/core';

@Component({
	selector: 'leaderboard-tabs',
	templateUrl: 'leaderboard-tabs.html'
})
export class LeaderboardTabsComponent {

	private mode = 'FIGHTER';
	private time = 'lastWeek';

	constructor() {
	}

	changeMode(){
		this.mode = this.mode == 'FIGHTER' ? 'FAMOUS' : 'FIGHTER';
	}




}
