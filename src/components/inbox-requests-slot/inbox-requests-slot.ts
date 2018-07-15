import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'inbox-requests-slot',
	templateUrl: 'inbox-requests-slot.html'
})
export class InboxRequestsSlotComponent {


	@Input() data = {};
	@Output() playerProfileClicked : EventEmitter<any> = new EventEmitter();
	@Output() buttonClicked : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
