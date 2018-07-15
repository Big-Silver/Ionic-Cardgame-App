import { Component, Input } from '@angular/core';


@Component({
	selector: 'stage-result-game-info',
	templateUrl: 'stage-result-game-info.html'
})
export class StageResultGameInfoComponent {

	@Input() mode = '';

	@Input() data = {
		playerName : 'Amari-jade232',
		stage : 1,
		sharesLeft : 2,
		game : { mode:'HEAD2HEAD', disabled:false, difficulty:'EXPERT', image:'assets/images/home/small-games/candystreak.png' },
	};

	constructor() {
	}

	startPulsing(){
	}

}
