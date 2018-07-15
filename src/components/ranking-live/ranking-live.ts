import { Component, Input } from '@angular/core';

@Component({
	selector: 'ranking-live',
	templateUrl: 'ranking-live.html'
})
export class RankingLiveComponent {

	@Input() highRankedPlayers = [];
	@Input() lowRankedPlayers = [];

	constructor() {


	}

}
