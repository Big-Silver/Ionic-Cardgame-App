import { Component, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'daily-mission-header,[daily-mission-header]',
	templateUrl: 'daily-mission-header.html'
})
export class DailyMissionHeaderComponent {

	@Output() goBack : EventEmitter<any> = new EventEmitter();

	constructor() {}

}
