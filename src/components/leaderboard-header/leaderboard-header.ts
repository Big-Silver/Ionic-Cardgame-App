import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: '[leaderboard-header]',
	templateUrl: 'leaderboard-header.html'
})
export class LeaderboardHeaderComponent {

	@Output() goBack : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
