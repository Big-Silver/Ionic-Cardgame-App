import { Component, Input } from '@angular/core';

@Component({
	selector: 'recently-played-game-icon',
	templateUrl: 'recently-played-game-icon.html'
})
export class RecentlyPlayedGameIconComponent {

	@Input() game = {};

	constructor() {
	}

}
