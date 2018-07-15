import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'gamemode-game-information',
	templateUrl: 'gamemode-game-information.html'
})
export class GamemodeGameInformationComponent implements AfterViewInit {

	private _game: any = {};
	private _disablePlayButton = false;
	private _disableBackButton = false;
	private mode = 'entry';
	private startAnimation = false;
	private isNewButton = false;
	private isCollectButton = false;

	@Input() playerRank: any;
	@Input() gameMode : any;
	@Input() set disablePlayButton(value){
		this._disablePlayButton = value;
	};
	@Input() set disableBackButton(value){
		this._disableBackButton = value;
	}
	@Input() set game(value){

		if(!value){
			this._game = {};
		}
		else{
			if(value.backgroundImage){
				value.backgroundImage = "url('"+value.backgroundImage+"')";
			}
			if(value.gameIcon){
				value.gameIcon = "url('"+value.gameIcon+"')";
			}
			this._game = value;
		}

	}

	@Output() onPlayGame: EventEmitter<any> = new EventEmitter();
	@Output() onGoToBackScreen: EventEmitter<any> = new EventEmitter(); 
	@Output() onResetGame: EventEmitter<any> = new EventEmitter();
	@Output() openRankPopup : EventEmitter<any> = new EventEmitter();

	constructor(
		private soundProvider : clickSoundProvider
	) {
	}

	setStateToNormal() {
		this.isNewButton = false;
		this.isCollectButton = false;
	}

	setStateToWin() {
		this.setStateToNormal();
	}

	setStateToLost() {
		this.setStateToNormal();
	}

	changeButtonToNew(){
		this.isNewButton = true;
	}

	changeButtonToCollect(){
		this.isCollectButton = true;
	}

	private _showEntryFee() {
		this.mode = 'entry';
	}

	private _showAfterGameOver() {
		this.mode = 'other';
	}

	private _playGame() {

		if(this._disablePlayButton == true)
			return;

		if(this.isNewButton == true || this.isCollectButton == true )
			return this.onResetGame.emit();
			
		this.soundProvider.playPlayButtonSound();
		this.onPlayGame.emit(this.game);
	}

	private _goToHome(){

		if(this._disableBackButton == true)
			return;

		this.onGoToBackScreen.emit();
	}

	ngAfterViewInit(){
		setTimeout(()=>{
			this.startAnimation = true;
			setTimeout(()=>{
				this.startAnimation = false;
			},2000);
		},200);
	}

}