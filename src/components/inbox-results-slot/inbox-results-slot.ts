import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'inbox-results-slot',
	templateUrl: 'inbox-results-slot.html'
})
export class InboxResultsSlotComponent {

	@Input() data = {};
	@Output() playerProfileClicked : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
