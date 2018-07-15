import { Component, OnDestroy, Input, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
	selector: '[gamemode-header]',
	templateUrl: 'gamemode-header.html'
})
export class GamemodeHeaderComponent implements OnDestroy, AfterViewInit {

	private animationBeat = false;
	private animationInterval;

	private _gamemode = 'arcade';

	@Output() openStoreScreen : EventEmitter<any> = new EventEmitter();
	@Input() set gamemode(value){
		this._gamemode = value;
	}
	@Input() disableButtons = false;

	constructor(
		private ele : ElementRef
	) {
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

	ngAfterViewInit(){
		
		this.setClassToMainElement();
	}

	setClassToMainElement(){

		if(!this.ele){
			return;
		}

		if(!this._gamemode){
			return;
		}

		let classToAdd = 'arcadeMode';
		
		if(this._gamemode == 'contest'){
			classToAdd = 'contestMode';
		}
		if(this._gamemode == 'replay'){
			classToAdd = 'replayMode';
		}
		if(this._gamemode == 'head2head'){
			classToAdd = 'head2headMode';
		}
		if(this._gamemode == 'instantwin'){
			classToAdd = 'instantwinMode';
		}

		let nativeElement = this.ele.nativeElement as HTMLElement;

		nativeElement.classList.remove('arcadeMode');
		nativeElement.classList.remove('contestMode');
		nativeElement.classList.remove('replayMode');
		nativeElement.classList.remove('head2headMode');
		nativeElement.classList.remove('instantwinMode');

		nativeElement.classList.add(classToAdd);


	}

	doOpenStoreScreen(){

		if(this.disableButtons == true)
			return;

		this.openStoreScreen.emit();
	}

}