import { Component, ViewChild, AfterViewInit, ContentChild, ViewChildren, Output, EventEmitter, QueryList, ElementRef } from '@angular/core';
import { ArcadeContentScoreInformationComponent } from '../arcade-content-score-information/arcade-content-score-information';
import { Slides, Slide } from 'ionic-angular';
import { clickSoundProvider } from '../../providers/click';

declare var WordShuffler : any;

@Component({
	selector: 'arcade-content-score-information-won',
	templateUrl: 'arcade-content-score-information-won.html'
})
export class ArcadeContentScoreInformationWonComponent implements AfterViewInit {

	// @ViewChild('slides') slides : Slides;
	// @ViewChild(ArcadeContentScoreInformationComponent) scoreInformationComponent : ArcadeContentScoreInformationComponent;
	// private firstTimeLoad = false;

	@ViewChild('slides') slides : Slides;
	@ViewChild('targetScore') targetScore : ArcadeContentScoreInformationComponent;

	@ViewChildren('firstScreen') firstScreenElements : QueryList<any>;
	@ViewChildren('secondScreen') secondScreenElements : QueryList<any>;
	@ViewChildren('wordShufflers') shuffleCells : QueryList<any>;

	@Output() enablePlayButton : EventEmitter<any> = new EventEmitter();
	@Output() disablePlayButton : EventEmitter<any> = new EventEmitter();
	@Output() animationOver : EventEmitter<any> = new EventEmitter();

	private isFirstTimeLoaded = false;
	private showFirstSlide = true;
	private rows: Array<any> = new Array();

	constructor(
		private soundProvider : clickSoundProvider
	) {
		this.rows.push({ label: 'points', value: 1209 });
		this.rows.push({ label: 'times', value: 1830 });
		this.rows.push({ label: 'moves', value: 3614 });
		this.rows.push({ label: 'attacks', value: 1518 });
		this.rows.push({ label: 'combos', value: 9016 });
	}

	//////////////////

		// restartViewAnimation(){

		// 	if(this.firstTimeLoad == false)
		// 		return;

		// 	this.slides.lockSwipes(false);
		// 	this.slides.slideTo(0);
		// 	this.ngAfterViewInit();
		// }

		// ngAfterViewInit(){
		// 	this.firstTimeLoad = true;
		// 	this.slides.lockSwipes(true);
		// 	setTimeout(() => {
		// 		this.changeNextSlide();
		// 		this.scoreInformationComponent.setStateToWin();
		// 	},4500);
		// }

		// changeNextSlide(){
		// 	this.slides.lockSwipes(false);	
		// 	this.slides.slideNext();
		// 	this.slides.lockSwipes(true);	
		// }


	//////////////////

	ngAfterViewInit(){
		
		this.slides.longSwipesRatio = 0.1;
		this.targetScore.fadeOutAllContent();
		this.isFirstTimeLoaded = true;
		this.setStateToWin();

		

		this.shuffleCells.forEach((el)=>{
			el.shuffler = new WordShuffler(((el as ElementRef).nativeElement as HTMLElement).getElementsByClassName('text')[0],{
				timeOffset : 3
			});
		});
	}

	setStateToNormal(){

		if(!this.isFirstTimeLoaded)
			return;

		this.slides.lockSwipes(false);
		this.slides.slideTo(0);
		this.slides.lockSwipes(true);

		this.firstScreenElements.forEach((el : ElementRef)=>{
			let ele = el.nativeElement as HTMLElement;
			ele.style.display = ele.tagName == 'TR' ? 'table-row' : 'table-cell';
			ele.style.animationDirection = 'unset';
			ele.style.animationDuration = 'unset';
			ele.classList.remove('fadeIn');
			ele.classList.remove('animated');
		});

		this.secondScreenElements.forEach((el : ElementRef)=>{
			let ele = el.nativeElement as HTMLElement;
			ele.style.display = 'none';
			ele.style.animationDirection = 'unset';
			ele.style.animationDuration = 'unset';
			ele.classList.remove('fadeIn');
			ele.classList.remove('animated');
		});

		this.targetScore.fadeOutAllContent();
	}

	setStateToWin(){
		
		this.slides.lockSwipes(true);

		if(!this.isFirstTimeLoaded)
			return;

		setTimeout(()=>{
			this.disablePlayButton.emit();
		},0);
		setTimeout(()=>{
			this.switchScreen();
			this.shuffleCells.forEach((el)=>{
				if(el && el.shuffler){
					(el.nativeElement as HTMLElement).style.opacity = '0';
					(el.nativeElement as HTMLElement).classList.remove('achieved','not-achieved');
				}
			});
			setTimeout(()=>{
				this.startShuffling();
			},500);
			this.startSlideTransition();
		},5000);
	}

	setStateToLost(){
		this.setStateToNormal();
	}

	startSlideTransition(){
		setTimeout(()=>{
			this.slides.lockSwipes(false);
			this.slides.slideNext();
			this.enablePlayButton.emit();
			this.targetScore.fadeInAllContent(true, 500);

			setTimeout(()=>{
				this.animationOver.emit();
			},2500);

		},4500);
	}

	private hideElementsOfScreen(elements : QueryList<ElementRef>){
		
		elements.forEach((element)=>{
			let ele = element.nativeElement as HTMLElement;
			ele.style.animationDirection  = 'forwards';
			ele.style.animationDuration = '0.4s';
			ele.classList.add('fadeOut');
			ele.classList.add('animated');
		});

		setTimeout(()=>{
			elements.forEach((element)=>{
				let ele = element.nativeElement as HTMLElement;
				ele.style.display = 'none';
				ele.classList.remove('fadeOut');
				ele.classList.remove('fadeIn');
				ele.classList.remove('animated');
			});
		},450);

	}

	private switchScreen(toSecondScreen = true){
		
		let elementsToHide = (toSecondScreen) ? this.firstScreenElements : this.secondScreenElements;
		let elementsToShow = (!toSecondScreen) ? this.firstScreenElements : this.secondScreenElements;

		this.hideElementsOfScreen(elementsToHide);

		setTimeout(()=>{
			this.showElementsOfScreen(elementsToShow);
		},500);

	}

	private showElementsOfScreen(elements : QueryList<ElementRef>){

		elements.forEach((element)=>{
			let ele = element.nativeElement as HTMLElement;
			ele.style.display = ele.tagName == 'TR' ? 'table-row' : 'table-cell';
			ele.style.animationDirection = 'unset';
			ele.style.animationDuration = '1s';
			ele.classList.add('fadeIn');
			ele.classList.add('animated');
		});

		setTimeout(()=>{
			elements.forEach((element)=>{
				let ele = element.nativeElement as HTMLElement;
				ele.classList.remove('fadeOut');
				ele.classList.remove('fadeIn');
				ele.classList.remove('animated');
			});
		},450);
	}

	private startShuffling(color = '#fff30a'){
		this._startShuffling(this.shuffleCells, 0);
	}

	private _startShuffling(elementList : QueryList<ElementRef>, startIndex, color = '#fff30a'){
		if(startIndex > elementList.length - 1){
			return;
		}
		let el : any = elementList.toArray()[startIndex];
		if(el && el.shuffler){
			(el.nativeElement as HTMLElement).style.opacity = 'unset';
			el.shuffler.textColor = color;
			el.shuffler.restart((()=>{
				let classToAdd = Math.round(Math.random()) == 0 ? 'achieved' : 'not-achieved';
				startIndex =  startIndex + 1;
				(el.nativeElement as HTMLElement).classList.add(classToAdd);

				(classToAdd == "achieved") ? this.soundProvider.playArcadeAwardedSound() : this.soundProvider.playArcadeWrongSound();

				this._startShuffling(elementList, startIndex);
			}).bind(this));
		}
	}

}
