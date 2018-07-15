import { Component, AfterViewInit, OnDestroy, ViewContainerRef, Input, ViewChildren, QueryList } from '@angular/core';
import { fireAnimationService } from '../../animation/fire';

declare var WordShuffler : any;

@Component({
	selector: 'arcade-content-score-information',
	templateUrl: 'arcade-content-score-information.html',
	providers : [ fireAnimationService ]
})
export class ArcadeContentScoreInformationComponent implements AfterViewInit {

	@ViewChildren('wordShufflers') shuffleCells : QueryList<any>;
	private rows: Array<any> = new Array();
	private _mode : string = '';
	private _animateButtons : boolean = false;

	private isAnimating : boolean = false;
	private disableButton : boolean = false;
	private fadingContent : boolean = false;

	@Input()
	set mode(value){
		this._mode = value;
	}

	@Input() hideButtons;

	@Input()
	set animateButtons(value){
		this._animateButtons = value;
	}

	constructor(
		private view : ViewContainerRef
	) {
		this.rows.push({ label: 'points', value: 1209 });
		this.rows.push({ label: 'times', value: 1830 });
		this.rows.push({ label: 'moves', value: 3614 });
		this.rows.push({ label: 'attacks', value: 1518 });
		this.rows.push({ label: 'combos', value: 9016 });
	}

	setStateToNormal(){
		this.fadeInAllContent(false, 0);
		this.isAnimating = false;
	}

	setStateToWin(){
		let fadeTimeout = 1000;
		this.isAnimating = false;
		this.fadeOutAllContent();
		this.fadeInAllContent(true, fadeTimeout);
	}

	setStateToLost() {
		let fadeTimeout = 1000;
		this.isAnimating = false;
		this.fadeOutAllContent();
		this.fadeInAllContent(true, fadeTimeout);
	}

	fadeInAllContent(startShuffling, time = 0){

		if(!time) 
			time = 0;

		setTimeout(()=>{

			let oldAnimateState = this._animateButtons;
			(<HTMLElement>this.view.element.nativeElement).classList.remove('fade-out-content');
			
			this._animateButtons = true;
			this.fadingContent = true;

			if(startShuffling)
				this.startShuffling();


			let imageTimout = this._mode == 'WON' ? 2500 : 0;

			setTimeout(()=>{
				this.isAnimating = true;
				setTimeout(()=>{
					this._animateButtons = oldAnimateState;
					this.isAnimating = false;
					this.fadingContent = false;
				},1000);
			},imageTimout);

		},time);
	}

	fadeOutAllContent(){
		(<HTMLElement>this.view.element.nativeElement).classList.add('fade-out-content');
	}

	private startShuffling(color = '#fff30a'){
		this.shuffleCells.forEach((el)=>{
			if(el && el.shuffler){
				el.shuffler.restart();
				el.shuffler.textColor = color;
			}
		});
	}

	ngAfterViewInit(){

		this.shuffleCells.forEach((el)=>{
			el.shuffler = new WordShuffler(el.nativeElement,{
				timeOffset : 10
			});
		});
		
		setTimeout(()=>{
			this.isAnimating = ( this._animateButtons == true ) ? true : false;
		},200);
	}


}
