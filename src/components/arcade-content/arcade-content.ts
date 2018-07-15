import { Component, ContentChild, AfterContentInit } from '@angular/core';

import { GamemodeGameInformationComponent } from '../gamemode-game-information/gamemode-game-information';
import { ArcadeContentGameDetailsWonComponent } from '../arcade-content-game-details-won/arcade-content-game-details-won';
import { ArcadeContentGameDetailsLoseComponent } from '../arcade-content-game-details-lose/arcade-content-game-details-lose';
import { ArcadeContentScoreInformationComponent } from '../arcade-content-score-information/arcade-content-score-information';
import { ArcadeContentScoreInformationWonComponent } from '../arcade-content-score-information-won/arcade-content-score-information-won';
import { ArcadeContentScoreInformationLoseComponent } from '../arcade-content-score-information-lose/arcade-content-score-information-lose';

@Component({
	selector: '[arcade-content]',
	templateUrl: 'arcade-content.html'
})
export class ArcadeContentComponent implements AfterContentInit {

	@ContentChild(GamemodeGameInformationComponent) gameInformationComonent : GamemodeGameInformationComponent;
	@ContentChild(ArcadeContentScoreInformationComponent) scoreInformationComponent : ArcadeContentScoreInformationComponent;
	@ContentChild(ArcadeContentGameDetailsWonComponent) gameInformationWonComonent : ArcadeContentGameDetailsWonComponent;
	@ContentChild(ArcadeContentGameDetailsLoseComponent) gameDetailsLoseComponent : ArcadeContentGameDetailsLoseComponent;
	@ContentChild(ArcadeContentScoreInformationWonComponent) scoreInformationWonComponent : ArcadeContentScoreInformationWonComponent;
	@ContentChild(ArcadeContentScoreInformationLoseComponent) scoreInformationLoseComponent : ArcadeContentScoreInformationLoseComponent;

	constructor() {
	}

	setStateToWin(){

		(this.gameInformationComonent) ? 
			this.gameInformationComonent.setStateToWin() : '';

		(this.scoreInformationComponent) ?
			this.scoreInformationComponent.setStateToWin() : '';

		(this.scoreInformationWonComponent) ?
			this.scoreInformationWonComponent.setStateToWin() : '';

		(this.gameInformationWonComonent) ?
			this.gameInformationWonComonent.restartViewAnimation() : '';

		(this.scoreInformationLoseComponent) ?
			this.scoreInformationLoseComponent.setStateToWin() : '';

		(this.gameDetailsLoseComponent) ?
			this.gameDetailsLoseComponent.setStateToWin() : '';
		
	}

	setStateToLost(){
		(this.gameInformationComonent) ? 
			this.gameInformationComonent.setStateToLost() : '';

		(this.scoreInformationComponent) ?
			this.scoreInformationComponent.setStateToLost() : '';

		(this.scoreInformationLoseComponent) ?
			this.scoreInformationLoseComponent.setStateToLost() : '';

		(this.gameDetailsLoseComponent) ?
			this.gameDetailsLoseComponent.setStateToLost() : '';

		(this.scoreInformationWonComponent) ?
			this.scoreInformationWonComponent.setStateToLost() : '';
	}

	setNormalState(){

		(this.gameInformationComonent) ? 
			this.gameInformationComonent.setStateToNormal() : '';

		(this.scoreInformationComponent) ?
			this.scoreInformationComponent.setStateToNormal() : '';

		(this.scoreInformationLoseComponent) ?
			this.scoreInformationLoseComponent.setStateToNormal() : '';

		(this.gameDetailsLoseComponent) ?
			this.gameDetailsLoseComponent.setStateToNormal() : '';

		(this.scoreInformationWonComponent) ?
			this.scoreInformationWonComponent.setStateToNormal() : '';


	}

	ngAfterContentInit(){}

}
