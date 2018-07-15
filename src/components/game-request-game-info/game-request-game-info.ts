import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'game-request-game-info',
	templateUrl: 'game-request-game-info.html'
})
export class GameRequestGameInfoComponent implements AfterViewInit {

	@Input() mode = '';
	@ViewChild('gameIcon') gameIcon : ElementRef;

	@Input() data = {
		gameIcon : 'assets/images/home/small-games/wordhunt.png',
		gameName : 'Word Hunt' ,
		fame : 10,
		yellowToken : 5
	};

	constructor() {
	}

	setGameIcon(){	
		if(this.data && this.data.gameIcon){
			(this.gameIcon.nativeElement as HTMLImageElement).src = this.data.gameIcon;
		}
	}

	ngAfterViewInit(){
		this.setGameIcon();
	}

}
