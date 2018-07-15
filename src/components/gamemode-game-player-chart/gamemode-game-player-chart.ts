import { Component, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'gamemode-game-player-chart',
	templateUrl: 'gamemode-game-player-chart.html'
})
export class GamemodeGamePlayerChartComponent {

	private scores : Array<any> = new Array<any>();
	@Input() playerPosition = 1;

	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();

	constructor(
		private changeDetector : ChangeDetectorRef
	) {
		this.setScores();
	}

	private setScores(){

		this.scores.push({label:'POINTS',first:1200,second:1200,third:1200,fourth:1200,fifth:1200});
		this.scores.push({label:'TIME',first:60,second:60,third:60,fourth:60,fifth:60});
		this.scores.push({label:'MOVES',first:47,second:47,third:47,fourth:47,fifth:47});
		this.scores.push({label:'ATTEMPTS',first:34,second:34,third:34,fourth:34,fifth:34});

	}

}