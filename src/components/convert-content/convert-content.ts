import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'convert-content,[convert-content]',
	templateUrl: 'convert-content.html'
})
export class ConvertContentComponent {

	@Output() closeModal : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
