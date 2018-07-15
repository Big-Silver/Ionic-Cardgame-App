import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: '[stage-result-header]',
	templateUrl: 'stage-result-header.html'
})
export class StageResultHeaderComponent {

	@Input() title = 'Result';
	@Input() subTitle = 'Stage';
	@Input() hideCloseButton = true;

	@Output() closeModal : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

}
