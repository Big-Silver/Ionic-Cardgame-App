import { Component, OnDestroy, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'home-screen-header, [home-screen-header]',
	templateUrl: 'home-screen-header.html'
})
export class HomeScreenHeaderComponent implements OnDestroy, AfterViewInit {

	@Output() openStoreScreen : EventEmitter<any> = new EventEmitter();

	private animationTimer;
	private animationHeartBeat : boolean = false;


	constructor(
		private clickSoundProvider : clickSoundProvider
	) {

	}

	ngOnDestroy(){
		clearInterval(this.animationTimer);
	}

	ngAfterViewInit(){

		this.animationTimer = setInterval(()=>{
			this.animationHeartBeat = true;
			setTimeout(()=>{
				this.animationHeartBeat = false;
			},2000);
		},8000);

	}

	private playClickSound(){
		this.clickSoundProvider.playClick();
	}

	doOpenStoreScreen(){
		this.playClickSound();
		this.openStoreScreen.emit(Date.now());
	}

}
