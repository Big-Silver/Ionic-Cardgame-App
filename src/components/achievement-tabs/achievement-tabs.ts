import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';


@Component({
	selector: 'achievement-tabs',
	templateUrl: 'achievement-tabs.html'
})
export class AchievementTabsComponent implements AfterViewInit {

	private activeGameMode = 'ARCADE';
	@Output() tabChanged : EventEmitter<any> = new EventEmitter();

	constructor() {

		

	}

	changeGameMode(gameMode){
		this.activeGameMode = gameMode;
		this.tabChanged.emit(gameMode);
	}

	ngAfterViewInit(){
		this.tabChanged.emit(this.activeGameMode);
	}

}
