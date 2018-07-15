import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'gamemode-game-icon',
	templateUrl: 'gamemode-game-icon.html'
})
export class GamemodeGameIconComponent {

	private _icon: string = "";

	@Input() gameMode = '';

	@Input() set icon(value) {

		if(value.indexOf('url(') >= 0){
			this._icon = value;
			return;
		}

		this._icon = "url('" + value + "')";
		
	}

	constructor() {
	}

	ngAfterViewInit() {
	}

}
