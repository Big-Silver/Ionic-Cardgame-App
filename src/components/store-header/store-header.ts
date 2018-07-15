import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'store-header, [store-header]',
	templateUrl: 'store-header.html'
})
export class StoreHeaderComponent {

	@Output() closeModal : EventEmitter<any> = new EventEmitter();
	@Output() convertCoins : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
