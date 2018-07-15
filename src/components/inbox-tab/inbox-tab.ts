import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';


@Component({
	selector: 'inbox-tab',
	templateUrl: 'inbox-tab.html'
})
export class InboxTabComponent implements AfterViewInit {


	@Output() activeTabChanged : EventEmitter<any> = new EventEmitter();
	@Output() activeGameModeChanged : EventEmitter<any> = new EventEmitter();

	private activeTab = "RESULTS";
	private activeGameMode = 'HEAD2HEAD';
	private recentsGame = false;


	constructor() {
		
	}


	changeActiveTab(value){
		this.activeTab = value;
		this.activeTabChanged.emit(value);
	}

	changeActiveGameMode(value){
		this.activeGameMode = value;
		this.activeGameModeChanged.emit(value);
	}

	ngAfterViewInit(){
		this.changeActiveGameMode(this.activeGameMode);
	}


}
