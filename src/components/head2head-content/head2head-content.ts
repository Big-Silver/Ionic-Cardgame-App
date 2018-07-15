import { Component, ContentChild, AfterContentInit } from '@angular/core';

import { GamemodeGameInformationComponent } from '../gamemode-game-information/gamemode-game-information';

import { GamemodeGameDetailsComponent } from '../gamemode-game-details/gamemode-game-details';
import { Head2headSearchOpponentComponent } from '../head2head-search-opponent/head2head-search-opponent';
import { Head2headAwaitingSlideComponent } from '../head2head-awaiting-slide/head2head-awaiting-slide';
import { Head2headWinningSlideComponent } from '../head2head-winning-slide/head2head-winning-slide';
import { Head2headLoseSlideComponent } from '../head2head-lose-slide/head2head-lose-slide';
import { Head2headScoreInformationAwaitingSlideComponent } from '../head2head-score-information-awaiting-slide/head2head-score-information-awaiting-slide';
import { Head2headScoreInformationWonSlideComponent } from '../head2head-score-information-won-slide/head2head-score-information-won-slide';
import { Head2headScoreInformationLoseSlideComponent } from '../head2head-score-information-lose-slide/head2head-score-information-lose-slide';

import { Head2headGoalSetterComponent } from '../head2head-goal-setter/head2head-goal-setter';

@Component({
	selector: 'head2head-content, [head2head-content]',
	templateUrl: 'head2head-content.html'
})
export class Head2headContentComponent {

	@ContentChild(GamemodeGameInformationComponent) gameInformationComonent: GamemodeGameInformationComponent;

	@ContentChild(GamemodeGameDetailsComponent) gameDetailsComponent : GamemodeGameDetailsComponent;
	@ContentChild(Head2headSearchOpponentComponent) searchOpponentComponent : Head2headSearchOpponentComponent;
	@ContentChild(Head2headAwaitingSlideComponent) awaitingSlideComponent : Head2headAwaitingSlideComponent;
	@ContentChild(Head2headWinningSlideComponent) winningSlideComponent : Head2headWinningSlideComponent;
	@ContentChild(Head2headLoseSlideComponent) loseSlideComponent : Head2headLoseSlideComponent;
	@ContentChild(Head2headScoreInformationAwaitingSlideComponent) scoreInformationAwaitingSlideComponent : Head2headScoreInformationAwaitingSlideComponent;
	@ContentChild(Head2headScoreInformationWonSlideComponent) scoreInformationWonSlideComponent : Head2headScoreInformationWonSlideComponent;
	@ContentChild(Head2headScoreInformationLoseSlideComponent) scoreInformationLoseSlideComponent : Head2headScoreInformationLoseSlideComponent;

	@ContentChild(Head2headGoalSetterComponent) goalSetterComponent : Head2headGoalSetterComponent;

	constructor() {
	}

	setStateToWin() {

		(this.gameInformationComonent) ?
			this.gameInformationComonent.setStateToWin() : '';

		(this.gameDetailsComponent) ?
			this.gameDetailsComponent.setStateToWin() : '';

		(this.searchOpponentComponent) ?
			this.searchOpponentComponent.setStateToWin() : '';

		(this.awaitingSlideComponent) ?
			this.awaitingSlideComponent.setStateToWin() : '';

		(this.winningSlideComponent) ?
			this.winningSlideComponent.setStateToWin() : '';
		
		(this.loseSlideComponent) ?
			this.loseSlideComponent.setStateToWin() : '';

		(this.goalSetterComponent) ?
			this.goalSetterComponent.setStateToWin() : '';

		(this.scoreInformationAwaitingSlideComponent) ?
			this.scoreInformationAwaitingSlideComponent.setStateToWin() : '';

		(this.scoreInformationWonSlideComponent) ?
			this.scoreInformationWonSlideComponent.setStateToWin() : '';

		(this.scoreInformationLoseSlideComponent) ?
			this.scoreInformationLoseSlideComponent.setStateToWin() : '';

	}

	setStateToLost() {

		(this.gameInformationComonent) ?
			this.gameInformationComonent.setStateToLost() : '';

		(this.gameDetailsComponent) ?
			this.gameDetailsComponent.setStateToLost() : '';

		(this.searchOpponentComponent) ?
			this.searchOpponentComponent.setStateToLost() : '';
		
		(this.awaitingSlideComponent) ?
			this.awaitingSlideComponent.setStateToLost() : '';

		(this.winningSlideComponent) ?
			this.winningSlideComponent.setStateToLost() : '';

		(this.loseSlideComponent) ?
			this.loseSlideComponent.setStateToLost() : '';

		(this.goalSetterComponent) ?
			this.goalSetterComponent.setStateToLost() : '';

		(this.scoreInformationAwaitingSlideComponent) ?
			this.scoreInformationAwaitingSlideComponent.setStateToLost() : '';

		(this.scoreInformationWonSlideComponent) ?
			this.scoreInformationWonSlideComponent.setStateToLost() : '';

		(this.scoreInformationLoseSlideComponent) ?
			this.scoreInformationLoseSlideComponent.setStateToLost() : '';

	}

	setNormalState() {

		(this.gameInformationComonent) ?
			this.gameInformationComonent.setStateToNormal() : '';

		(this.gameDetailsComponent) ?
			this.gameDetailsComponent.setStateToNormal() : '';

		(this.searchOpponentComponent) ?
			this.searchOpponentComponent.setStateToNormal() : '';

		(this.awaitingSlideComponent) ?
			this.awaitingSlideComponent.setStateToNormal() : '';

		(this.winningSlideComponent) ?
			this.winningSlideComponent.setStateToNormal() : '';

		(this.loseSlideComponent) ?
			this.loseSlideComponent.setStateToNormal() : '';

		(this.goalSetterComponent) ?
			this.goalSetterComponent.setStateToNormal() : '';

		(this.scoreInformationAwaitingSlideComponent) ? 
			this.scoreInformationAwaitingSlideComponent.setStateToNormal() : '';

		(this.scoreInformationWonSlideComponent) ?
			this.scoreInformationWonSlideComponent.setStateToNormal() : '';

		(this.scoreInformationLoseSlideComponent) ?
			this.scoreInformationLoseSlideComponent.setStateToNormal() : '';

	}

	setWaitBeforeGameState(){

		(this.gameInformationComonent) ?
			this.gameInformationComonent.setStateToNormal() : '';

		(this.gameDetailsComponent) ?
			this.gameDetailsComponent.setStateToNormal() : '';

		(this.searchOpponentComponent) ?
			this.searchOpponentComponent.setStateToWaitBeforeGame() : '';

		(this.awaitingSlideComponent) ?
			this.awaitingSlideComponent.setStateToNormal() : '';

		(this.winningSlideComponent) ?
			this.winningSlideComponent.setStateToNormal() : '';

		(this.loseSlideComponent) ?
			this.loseSlideComponent.setStateToNormal() : '';

		(this.goalSetterComponent) ?
			this.goalSetterComponent.setWaitBeforeGameState() : '';

		(this.scoreInformationAwaitingSlideComponent) ? 
			this.scoreInformationAwaitingSlideComponent.setStateToNormal() : '';

		(this.scoreInformationWonSlideComponent) ?
			this.scoreInformationWonSlideComponent.setStateToNormal() : '';

		(this.scoreInformationLoseSlideComponent) ?
			this.scoreInformationLoseSlideComponent.setStateToNormal() : '';
			
	}

	setWaitAfterGameState(){

		(this.gameInformationComonent) ?
			this.gameInformationComonent.setStateToNormal() : '';

		(this.gameDetailsComponent) ?
			this.gameDetailsComponent.setStateToNormal() : '';

		(this.searchOpponentComponent) ?
			this.searchOpponentComponent.setStateToNormal() : '';

		(this.awaitingSlideComponent) ?
			this.awaitingSlideComponent.setStateToNormal() : '';

		(this.winningSlideComponent) ?
			this.winningSlideComponent.setStateToNormal() : '';

		(this.loseSlideComponent) ?
			this.loseSlideComponent.setStateToNormal() : '';

		(this.goalSetterComponent) ?
			this.goalSetterComponent.setStateToNormal() : '';

		(this.scoreInformationAwaitingSlideComponent) ? 
			this.scoreInformationAwaitingSlideComponent.setWaitAfterGameState() : '';

		(this.scoreInformationWonSlideComponent) ?
			this.scoreInformationWonSlideComponent.setStateToNormal() : '';

		(this.scoreInformationLoseSlideComponent) ?
			this.scoreInformationLoseSlideComponent.setStateToNormal() : '';

	}

	changePlayButtonToNew(){
		this.gameInformationComonent.changeButtonToNew();
	}

	changePlayButtonToCollect(){
		this.gameInformationComonent.changeButtonToCollect();
	}

	ngAfterContentInit() { }

}
