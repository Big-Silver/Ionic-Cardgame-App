import { Component, Input } from '@angular/core';

@Component({
	selector: 'game-request-challanger',
	templateUrl: 'game-request-challanger.html'
})
export class GameRequestChallangerComponent {

	@Input() mode = '';
	@Input() data = {
		challangerName : 'Amari Jade',
		playerInformation : { avatarImage : 'assets/images/profile/avatar2.svg', name : 'Amari-Jade', avatarCountryImage : 'assets/images/contest/uk.png', stars: 4, badges : 2, level : 'AMATEUR' },
		challangerInformation : {unknown: false, avatarImage : 'assets/images/profile/avatar5.svg', name : 'Nat Natty', avatarCountryImage : 'assets/images/contest/in.png', stars: '4', badges : '2', level : 'AMATEUR' }
	};

	constructor() {
	}

}
