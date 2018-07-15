import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
	selector: 'player-position-slot',
	templateUrl: 'player-position-slot.html'
})
export class PlayerPositionSlotComponent implements AfterViewInit {

	private _player : any = {};

	@Input() inverted = false;
	@Input() set player(value){

		if(!value){
			this._player = {};
			return;
		}

		

		this._player = value;
		this.setBackgroundColor();
	}

	private selected = false;

	constructor(private el : ElementRef) {
		
	}

	ngAfterViewInit(){
		this.setBackgroundColor();
	}


	setBackgroundColor(){

		if(!this.el)
			return;

		let ele = this.el.nativeElement as HTMLElement;

		if(this._player.isSilver == true){
			ele.style.backgroundImage = 'linear-gradient(90deg, #FFFFFF, #656565)';
		}else if(this._player.isBlue == true){
			ele.style.backgroundImage = 'linear-gradient(90deg, #0b275f, #186EC1)';
		}else{
			ele.style.backgroundImage = 'linear-gradient(90deg, #005905, #7ED321)';
		}

	}

}