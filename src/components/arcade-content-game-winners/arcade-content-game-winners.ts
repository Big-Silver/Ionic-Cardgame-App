import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
	selector: 'arcade-content-game-winners',
	templateUrl: 'arcade-content-game-winners.html'
})
export class ArcadeContentGameWinnersComponent {

	public gamesWinnerList = [];
	constructor() {
		let listDetails: any;
		for (let i = 1; i <= 15; i++) {
			listDetails = {
				src: "assets/images/profile/avatar" + (i) + ".svg",
				name: "Amari" + (i * 100),
				time: i + " second ago",
				earn: (i * 50)
			}
			this.gamesWinnerList.push(listDetails);
		}
	}

}
