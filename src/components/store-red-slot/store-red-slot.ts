import { Component, Input } from '@angular/core';


@Component({
	selector: 'store-red-slot',
	templateUrl: 'store-red-slot.html'
})
export class StoreRedSlotComponent {

	@Input() mode = '';

	@Input() data = {};

	constructor() {
	}

}
