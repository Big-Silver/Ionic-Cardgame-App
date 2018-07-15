import { Component, Input } from '@angular/core';


@Component({
	selector: 'squadup-selection-footer',
	templateUrl: 'squadup-selection-footer.html'
})
export class SquadupSelectionFooterComponent {

	@Input() mode = '';

	constructor() {
	}

}