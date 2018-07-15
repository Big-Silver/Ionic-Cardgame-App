import { Component, Input } from '@angular/core';

@Component({
	selector: 'game-request-footer',
	templateUrl: 'game-request-footer.html'
})
export class GameRequestFooterComponent {

	@Input() mode = '';

	constructor() {
	}

}
