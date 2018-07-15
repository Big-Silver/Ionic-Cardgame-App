import { Component, Input } from '@angular/core';

@Component({
	selector: 'ranking-description',
	templateUrl: 'ranking-description.html'
})
export class RankingDescriptionComponent {

	@Input() descriptionType = '';

	constructor() {
	}

}
