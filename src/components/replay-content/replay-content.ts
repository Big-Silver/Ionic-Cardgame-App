import { Component, ContentChild } from '@angular/core';
import { GamemodeGameDetailsWonComponent } from '../gamemode-game-details-won/gamemode-game-details-won';
import { GamemodeScoreInformationWonComponent } from '../gamemode-score-information-won/gamemode-score-information-won';
 
@Component({
	selector: '[replay-content]',
	templateUrl: 'replay-content.html'
})
export class ReplayContentComponent {

	@ContentChild(GamemodeGameDetailsWonComponent) gameInformationWonComonent : GamemodeGameDetailsWonComponent;
	@ContentChild(GamemodeScoreInformationWonComponent) scoreInformationWonComponent : GamemodeScoreInformationWonComponent;

	private doVerticalAlignTop = false;

	constructor() {
		
	}

	setStateToWin(){

		this.doVerticalAlignTop = true;

		(this.gameInformationWonComonent) ?
			this.gameInformationWonComonent.restartViewAnimation() : '';

		(this.scoreInformationWonComponent) ?
			this.scoreInformationWonComponent.setStateToWin() : '';

	}

	setStateToLost(){

		this.doVerticalAlignTop = false;

		(this.scoreInformationWonComponent) ?
			this.scoreInformationWonComponent.setStateToLost() : '';

	}

	setNormalState(){

		this.doVerticalAlignTop = false;

		(this.gameInformationWonComonent) ?
			this.gameInformationWonComonent.setNormalState() : '';

		(this.scoreInformationWonComponent) ?
			this.scoreInformationWonComponent.setStateToNormal() : '';

	}

}
