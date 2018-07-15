import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'convert-header,[convert-header]',
	templateUrl: 'convert-header.html'
})
export class ConvertHeaderComponent {

	@Output() closeModal : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
