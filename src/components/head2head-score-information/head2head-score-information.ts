import { Component, Input, ViewChildren, QueryList, AfterViewInit, EventEmitter, Output } from '@angular/core';

declare var WordShuffler;

@Component({
	selector: 'head2head-score-information',
	templateUrl: 'head2head-score-information.html'
})
export class Head2headScoreInformationComponent implements AfterViewInit {

	@ViewChildren('playerWordShuffler') playerWordShuffler : QueryList<any>; 
	@ViewChildren('opponentWordShuffler') opponentWordShuffler : QueryList<any>;

	@Input() ownInformation : Array<any> = new Array<any>();
	@Input() opponentInformation : any = {};
	@Input() ownScore : Array<any> = new Array<any>();
	@Input() opponentScore : any = {};

	@Input() opponentColor = '#fff30a';
	@Input() playerColor = '#fff30a';

	@Output() openPlayerProfile : EventEmitter<any> = new EventEmitter();

	constructor() {
	}

	setStateToLost(){

	}

	setStateToWin(){

	}

	setStateToNormal(){
		
	}

	startShuffling(){

		this.playerWordShuffler.forEach((el)=>{
			if(el && el.shuffler){
				el.shuffler.textColor = this.playerColor;
				el.shuffler.restart();
			}
		});

		if(this.opponentInformation.unknown == true)
			return;

		this.opponentWordShuffler.forEach((el)=>{
			if(el && el.shuffler){
				el.shuffler.textColor = this.opponentColor;
				el.shuffler.restart();
			}
		});

	}

	ngAfterViewInit(){

		this.playerWordShuffler.forEach((el)=>{
			el.shuffler = new WordShuffler(el.nativeElement,{
				timeOffset : 5,
				useTextColor : true
			});
		});


		this.opponentWordShuffler.forEach((el)=>{
			el.shuffler = new WordShuffler(el.nativeElement,{
				timeOffset : 5,
				useTextColor : true
			});
		});

	}



}
