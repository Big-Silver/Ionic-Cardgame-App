import { Component, Input } from '@angular/core';


@Component({
	selector: 'daily-mission-progress',
	templateUrl: 'daily-mission-progress.html'
})
export class DailyMissionProgressComponent {

	@Input() set data(value){
		value = (value && value > 0 ) ? value : 0;
		if(!value){
			this._progress = 0;
		}
		if(value > 100){
			value = 100;
		}	
		this._progress = value;
		this.setTopClass();
	}

	private _progress = 0;
	private topClass = '100%';

	constructor() {
	}

	setTopClass(){
		this.topClass = (100 - this._progress)+'%';
	}

}
