import { Component, Input } from '@angular/core';

@Component({
	selector: 'achievement-game-slot',
	templateUrl: 'achievement-game-slot.html'
})
export class AchievementGameSlotComponent {

	@Input() data = {};
	@Input() mode = 'ARCADE';

	constructor() {
	}

}
