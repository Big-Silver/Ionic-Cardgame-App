import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'player-profile-modal, [player-profile-modal]',
	templateUrl: 'player-profile-modal.html'
})
export class PlayerProfileModalComponent {

	private isFollowed = true;

	@ViewChild('upperSection') upperSection : ElementRef;
	@ViewChild('lowerSection') lowerSection : ElementRef;

	@Output() close : EventEmitter<any> = new EventEmitter();

	constructor(
		private elementRef : ElementRef
	) {
		setTimeout(()=>{
			if(this.upperSection && this.lowerSection){
				(this.upperSection.nativeElement as HTMLElement).classList.remove('slideInDown');
				(this.lowerSection.nativeElement as HTMLElement).classList.remove('slideInUp');
			}
		},500);
	}

	prepareBeforeClose(){
		(this.elementRef.nativeElement as HTMLElement).classList.add('background-fade-out');
		(this.upperSection.nativeElement as HTMLElement).style.transform = 'translate3d(0px, -100%, 0px)';
		(this.lowerSection.nativeElement as HTMLElement).style.transform = 'translate3d(0px, 100%, 0px)';
		setTimeout(()=>{
			this.close.emit();
		},450);
	}

}
