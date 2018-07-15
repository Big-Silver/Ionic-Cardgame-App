import { Component, Input } from '@angular/core';

@Component({
	selector: 'ranking-squadup',
	templateUrl: 'ranking-squadup.html'
})
export class RankingSquadupComponent {

	@Input() players = [];

	constructor() {

	}

}
