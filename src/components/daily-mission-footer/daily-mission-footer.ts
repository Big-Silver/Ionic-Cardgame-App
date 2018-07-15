import { Component, Input} from '@angular/core';

@Component({
	selector: 'daily-mission-footer',
	templateUrl: 'daily-mission-footer.html'
})
export class DailyMissionFooterComponent {


	

	@Input() set numberOfDays(value){

		value = (value > 0 && value < 100) ? Math.abs(value) : 0;
		this._dayArray = new Array(value);
	}

	@Input() completedDays = 4;

	private _dayArray = [];
	

	constructor() {
	}

}
