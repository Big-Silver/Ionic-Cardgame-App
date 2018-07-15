import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
	selector: 'home-screen-game-icon-small',
	templateUrl: 'home-screen-game-icon-small.html'
})
export class HomeScreenGameIconSmallComponent {

	private _game : any;
	private _color : string = '';
	private isLoaded = false;

	@ViewChild('background') gamePoster : ElementRef;
	@ViewChild('progress') progressbar : ElementRef;

	@Input() set data(value){

		this._game = value;
		if(this._game && this._game.progress){
			this.changeProgress(this._game.progress);
		}
		
		this.setImageIfExists();
	}

	@Input() set color(value){
		this._color = value;
	}

	constructor() {
	}

	setImageIfExists(){

		if(this.isLoaded == false)
			return;

		if(this._game.image){
			let poster = this.gamePoster.nativeElement as HTMLElement;
			poster.style.backgroundImage = "url('"+this._game.image+"')";
		}
	}

	ngAfterViewInit(){
		this.isLoaded = true;
		this.setImageIfExists();

		if(this.progressbar){
			this.changeProgress(this._game.progress);
		}

	}

	changeProgress(percentage){

		let colors = [
			'#f63a0f',
			'#f27011',
			'#f2b01e',
			'#f2d31b',
			'#86e01e'
		];

		let selectedColor = colors[0];
		
		if(percentage > 5 && percentage <= 25){
			selectedColor = colors[1];
		}

		if(percentage > 25 && percentage <= 50){
			selectedColor = colors[2];
		}

		if(percentage > 50 && percentage <= 75){
			selectedColor = colors[3];
		}

		if(percentage > 75 && percentage <= 100){
			selectedColor = colors[4];
		}

		percentage = parseInt(percentage);
		percentage = ( percentage => 0 && percentage <= 100 ) ? 100 - percentage : 50;

		if(!this._game || !this._game.subbar || this._game.subbar != 'PROGRESSBAR' || !this.progressbar)
			return;

		let nativeElement = this.progressbar.nativeElement as HTMLElement;
		nativeElement.style.transform = 'translateX(-'+percentage+'%)';

		nativeElement.style.backgroundColor = selectedColor;

	}

}