import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { Slides } from 'ionic-angular';

import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'gamemode-game-details-won',
	templateUrl: 'gamemode-game-details-won.html'
})
export class GamemodeGameDetailsWonComponent implements AfterViewInit {

	@ViewChildren('pyramidSlotContainer') pyramidSlots : QueryList<ElementRef>;
	@ViewChild('shiningTextContainer') shiningTextContainer : ElementRef;
	@ViewChild('slides') slides : Slides;

	@Input() tempWinPosition;
	@Input() gameMode = '';

	@Output() changeReplyCounter : EventEmitter<any> = new EventEmitter();
	@Output() slideTransitionStarted : EventEmitter<any> = new EventEmitter();
	@Output() slideTransitionFinished : EventEmitter<any> = new EventEmitter();
	@Output() openRankPopup : EventEmitter<any> = new EventEmitter();
	@Output() openSquadupModal : EventEmitter<any> = new EventEmitter();
	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();
	@Output() animationOver : EventEmitter<any> = new EventEmitter();

	private pyramidRankColors : Array<any> = new Array<any>();
	private shiningTextProperty : any = {};
	private players : Array<any> = new Array<any>();
	private firstTimeLoaded = false;
	private shiningText = '';
	private placeText = '';
	private rewardText = 0;

	constructor(
		private soundProvider : clickSoundProvider
	) {
		this.setPlayers();
	}

	setPlayers(){

		this.players = [];

		this.players.push({
			name : 'Amari-jade232',
			attempt : '1',
			top : '40',
			score : '4',
			profile : 'assets/images/profile/avatar1.svg',
			isOwn : false
		});

		this.players.push({
			name : 'Amari-jade232',
			attempt : '1',
			top : '60',
			score : '2',
			profile : 'assets/images/profile/avatar2.svg',
			isOwn : true,
			progressType : "UPARROW"
		});

		this.players.push({
			name : 'Amari-jade232',
			attempt : '1',
			top : '80',
			score : '1',
			profile : 'assets/images/profile/avatar3.svg',
			isOwn : false,
			isSilver : true
		});

		this.players.push({
			name : 'Amari-jade232',
			attempt : '1',
			top : '80',
			score : '1',
			profile : 'assets/images/profile/avatar4.svg',
			isOwn : false,
			isSilver : true
		});

		this.players.push({
			name : 'Amari-jade232',
			attempt : '1',
			top : '80',
			score : '1',
			profile : 'assets/images/profile/avatar5.svg',
			isOwn : false,
			isSilver : true
		});
	}

	pulseAllElement(){

		

		let pulseDelay = 0.2;

		this.pyramidSlots.forEach((ele : ElementRef, index)=>{
			let e = ele.nativeElement as HTMLElement;
			e.style.animationName = 'pyramid-pulse';
			e.style.animationDuration = '300ms';
			e.style.animationDelay = (pulseDelay * (index+1)) +'s';
			// setTimeout(()=>{
			// 	this.soundProvider.playTrianglePulseSound();
			// },(pulseDelay * (index+1) * 1000));
		});

		setTimeout(()=>{
			this.pyramidSlots.forEach((ele : ElementRef, index)=>{
				let e = ele.nativeElement as HTMLElement;
				e.style.animationName = "";
				e.style.animationDuration = "";
				e.style.animationDelay = "";
			});
			this.goToWinningPosition(this.tempWinPosition);
		},1400);

	}

	goToWinningPosition(targetPosition, currentPosition = 0){

		let shiningTextContainer = this.shiningTextContainer.nativeElement as HTMLElement;
		shiningTextContainer.style.filter = 'opacity(0)';

		let backgroundColors = ['#fbd500','#009eff','#7ed321','#8a00b6','#880706'];

		if(!this.pyramidSlots.toArray()[currentPosition] || !this.pyramidSlots.toArray()[currentPosition].nativeElement){
			return;
		}

		let ele = this.pyramidSlots.toArray()[currentPosition].nativeElement as HTMLElement;
		
		ele.style.animationName = '';
		setTimeout(()=>{
			if(currentPosition+1 == targetPosition){
				(ele.getElementsByClassName('pyramid-slot')[0] as HTMLElement).style.backgroundColor = backgroundColors[currentPosition];
				this.bringshiningTextIntoScene(currentPosition);
			}
				
			ele.style.animationName = 'pyramid-pulse';
			ele.style.animationDuration = '1000ms';
			this.soundProvider.playTrianglePulseSound();
		},10);

		setTimeout(()=>{
			if(currentPosition + 1 < targetPosition){
				this.goToWinningPosition(targetPosition, currentPosition+1);
			}
		},700);

	}

	bringshiningTextIntoScene(indexOfColor){

		let textAccordingToWinPosition = [{
			text : 'AMAZING', fontSize : '33px', placeText : '1st', reward:5
		},{
			text : 'GREAT', fontSize : '33px', placeText : '2nd', reward:4
		},{
			text : 'KEEP IT UP', fontSize: '32px', placeText : '3rd', reward:3
		},{
			text : 'STAY FOCUSED', fontSize : '22px', placeText : '4th', reward:2
		},{
			text : 'NOT BAD', fontSize:'33px', placeText : '5th', reward:1
		}];

		let shiningTextContainer = this.shiningTextContainer.nativeElement as HTMLElement;
		shiningTextContainer.style.animationName = 'fadeInRight';
		shiningTextContainer.style.animationDelay = '100ms';
		shiningTextContainer.style.animationDuration = '1000ms';

		this.shiningTextProperty = textAccordingToWinPosition[indexOfColor];
		this.placeText = textAccordingToWinPosition[indexOfColor].placeText;
		this.rewardText = textAccordingToWinPosition[indexOfColor].reward;

		setTimeout(()=>{
			shiningTextContainer.style.filter = 'unset';
			this.shiningText = textAccordingToWinPosition[indexOfColor].text;
		},150);
		setTimeout(()=>{
			this.changeReplyCounter.emit({type:'add', value:this.rewardText});
		},1000);
		setTimeout(()=>{
			this.continueSlides();
		},3000);
		

	}

	ngAfterViewInit(){

		if(!this.slides)
			return;

		this.firstTimeLoaded = true;
		this.slides.lockSwipes(true);
		
		setTimeout(()=>{
			this.slideTransitionStarted.emit();
		},100);
		
		setTimeout(()=>{
			this.pulseAllElement();
		},1200);
	}

	restartViewAnimation(){

		if(this.firstTimeLoaded == false)
			return;

		this.slides.lockSwipes(false);
		this.slides.slideTo(0);
		this.slides.lockSwipes(true);
		this.ngAfterViewInit();
	}

	continueSlides(){

		if(!this.slides)
			return;

		this.goToNextSlide();

		setTimeout(()=>{
			this.slideTransitionFinished.emit();
		},1000);

		setTimeout(()=>{

			if(!this.slides)
				return;

			this.goToNextSlide();


			setTimeout(()=>{
				this.slides.lockSwipes(false);
				this.animationOver.emit();
			},300);

		},3000);
	}

	goToNextSlide(){
		this.slides.lockSwipes(false);
		this.slides.slideNext();
		this.slides.lockSwipes(true);
	}

	setNormalState(){

		let shiningTextContainer = this.shiningTextContainer.nativeElement as HTMLElement;
		shiningTextContainer.style.filter = 'opacity(0)';
		shiningTextContainer.style.animationName = '';

		this.pyramidSlots.forEach((ele : ElementRef, index)=>{
			let e = ele.nativeElement as HTMLElement;
			e.style.animationName = "";
			e.style.animationDuration = "";
			e.style.animationDelay = "";
			(e.getElementsByClassName('pyramid-slot')[0] as HTMLElement).style.backgroundColor = '#828282';
		});

	}

	viewPlayerProfile(){
		this.openPlayerProfile.emit();
	}

}
