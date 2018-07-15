import { Component } from '@angular/core';


@Component({
	selector: 'achievement-footer',
	templateUrl: 'achievement-footer.html'
})
export class AchievementFooterComponent {

	private playerInformation = { avatarImage : 'assets/images/profile/avatar2.svg', name : 'Amari-Jade', avatarCountryImage : 'assets/images/contest/uk.png', stars: 4, badges : 2, level : 'AMATEUR' };

	constructor() {
	}

}
