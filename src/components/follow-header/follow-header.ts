import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'follow-header,[follow-header]',
	templateUrl: 'follow-header.html'
})
export class FollowHeaderComponent {

	@Output() tabChanged : EventEmitter<any> = new EventEmitter();
	@Output() goBack : EventEmitter<any> = new EventEmitter();
	private activeTab = 'follow';

	constructor() {
	}

	changeTab(value){
		this.activeTab = value;
		this.tabChanged.emit(value);
	}

}
