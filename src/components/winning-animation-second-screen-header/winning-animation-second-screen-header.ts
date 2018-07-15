import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
	selector: 'winning-animation-second-screen-header',
	templateUrl: 'winning-animation-second-screen-header.html'
})
export class WinningAnimationSecondScreenHeaderComponent {

	@Input() showCloseButton = false;

	@Output() closeModal : EventEmitter<any> = new EventEmitter();

	private game = {
		mode:'HEAD2HEAD', 
		disabled:false, 
		difficulty:'EXPERT',
		image:'assets/images/home/small-games/candystreak.png' 
	};


	constructor() {
	}

}
