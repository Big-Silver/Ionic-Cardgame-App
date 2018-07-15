import { Component, ViewChild, QueryList, AfterViewInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
	selector: 'gamemode-game-details, [gamemode-game-details]',
	templateUrl: 'gamemode-game-details.html'
})
export class GamemodeGameDetailsComponent implements AfterViewInit {

	@ViewChild('gameSlides') gameSlide: Slides;

	private _game: any = {};

	@Input() gameMode: any = '';
	@Input() set game(value) {
		if (!value) {
			this._game = {};
			return;
		}
		this._game = value;
		this.setImage();
	}

	private slideOptions = {};
	private startAnimation = false;

	constructor(
		private ele: ElementRef
	) {
	}

	setStateToNormal() {
		this.startAnimation = false;
	}

	setStateToWin() {
	}

	setStateToLost() {
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.startAnimation = true;
		}, 200);
		this.setImage();
	}

	setImage() {
		if (this.ele && this._game.backgroundImage) {
			let ele = this.ele.nativeElement as HTMLElement;
			ele.style.backgroundImage = "url('" + this._game.backgroundImage + "')";
		}
	}

	@Output() onHowToPlay: EventEmitter<any> = new EventEmitter();

	private _howToPlay() {
		this.onHowToPlay.emit();
	}


}
