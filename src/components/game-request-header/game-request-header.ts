import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: '[game-request-header]',
	templateUrl: 'game-request-header.html'
})
export class GameRequestHeaderComponent {

	@Input() mode = '';
	@Input() title = '';

	@Output() goBack : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
