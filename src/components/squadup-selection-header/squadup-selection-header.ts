import { Component, Input } from '@angular/core';


@Component({
	selector: 'squadup-selection-header',
	templateUrl: 'squadup-selection-header.html'
})
export class SquadupSelectionHeaderComponent {

	@Input() maxSelection = 0;
	@Input() alreadySelected = 0;
	@Input() mode = '';

	constructor() {
	}

}