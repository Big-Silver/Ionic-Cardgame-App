import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'squadup-selection, [squadup-selection]',
	templateUrl: 'squadup-selection.html'
})
export class SquadupSelectionComponent {


	@Output() closeModal : EventEmitter<any> = new EventEmitter();

	constructor() {
	}
	
}