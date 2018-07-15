import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'head2head-score-information-awaiting',
	templateUrl: 'head2head-score-information-awaiting.html'
})
export class Head2headScoreInformationAwaitingComponent {

	@Input() outcome = 'WAITING';
	@Input() amount = '2';
	@Input() playerInformation = {};
	@Input() opponentInformation = {};

	constructor() {
	}



}
