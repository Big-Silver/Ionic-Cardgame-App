import { Component, Input } from '@angular/core';

@Component({
	selector: 'stage-result-footer',
	templateUrl: 'stage-result-footer.html'
})
export class StageResultFooterComponent {

	@Input() mode = '';

	constructor() {
	}

}
