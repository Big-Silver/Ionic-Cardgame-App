import { Component, AfterViewInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { clickSoundProvider } from '../../providers/click';


@Component({
	selector: 'curtain',
	templateUrl: 'curtain.html'
})
export class CurtainComponent implements AfterViewInit, OnDestroy {

	private removeCurtain = false;
	@Output() curtainRemoved : EventEmitter<any> = new EventEmitter();

	constructor(
		private el : ElementRef,
		private soundProvider : clickSoundProvider
	) {
	}

	ngAfterViewInit(){
	}

	ngOnDestroy(){
	}

	doRemoveCurtain(){
		this.removeCurtain = true;
		this.soundProvider.playWinninSfx();
		setTimeout(()=>{
			this.curtainRemoved.emit();
		},800);
	}





}
