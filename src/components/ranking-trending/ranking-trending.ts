import { Component, Input } from '@angular/core';


@Component({
	selector: 'ranking-trending',
	templateUrl: 'ranking-trending.html'
})
export class RankingTrendingComponent {

	@Input() highRankedPlayers = [];
	@Input() lowRankedPlayers = [];

	constructor() {

	}

}
