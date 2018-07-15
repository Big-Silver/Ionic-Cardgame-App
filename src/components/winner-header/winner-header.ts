import { Component, Input } from '@angular/core';

@Component({
	selector: '[winner-header]',
	templateUrl: 'winner-header.html'
})
export class WinnerHeaderComponent {

	@Input() title = '';

	private animationInterval;
	private animationBeat = false;

	constructor() {
		this.startAnimationHeartbeat();
	}

	private startAnimationHeartbeat(){	
		this.animationInterval = setInterval(()=>{
			this.animationBeat = true;

			setTimeout(()=>{
				this.animationBeat = false;
			},3000);
		},8000);
	}

	ngOnDestroy(){
		clearInterval(this.animationInterval);
	}

}
