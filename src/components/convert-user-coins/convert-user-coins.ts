import { Component, Input } from '@angular/core';

@Component({
	selector: 'convert-user-coins',
	templateUrl: 'convert-user-coins.html'
})
export class ConvertUserCoinsComponent {



	@Input() totalAvailableCoins = 0;

	constructor() {
	}

}
