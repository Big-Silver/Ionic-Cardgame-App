import { Component, Input } from '@angular/core';


@Component({
	selector: 'player-profile-header',
	templateUrl: 'player-profile-header.html'
})
export class PlayerProfileHeaderComponent {

	@Input() playerInformation = {};

	constructor() {
		
	}

}
