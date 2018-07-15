import { Component, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Content, Events } from 'ionic-angular';
import { StageBlockComponent } from '../../components/stage-block/stage-block';


@Component({
	selector: 'page-stage',
	templateUrl: 'stage.html',
})
export class StagePage implements AfterViewInit{

	@ViewChild('playerPin') playerPin : ElementRef;
	@ViewChild(Content) content : Content;
	@ViewChildren(StageBlockComponent) blockComponents : QueryList<StageBlockComponent>;

	private shouldProgressAnimate = false;
	private timeoutInterval : number;
	private pinMovementTimeoutInterval : number;
	private activeStageObject : any = {};
	private scrollElement : HTMLElement = null;

	private stages = [{
		first : {
			buttonType : 'ACTIVE'
		},
		second : {
			buttonType : 'SILVER'
		},
		third : {
			buttonType : 'SILVER'
		},
		fourth : {
			buttonType : 'SILVER'
		},
		fifth : {
			buttonType : 'YELLOW',
			floatType : 'GIFT_YELLOW'
		}
	},{
		first : {
			buttonType : 'SILVER',
		},
		second : {
			buttonType : 'SILVER'
		},
		third : {
			buttonType : 'SILVER'
		},
		fourth : {
			buttonType : 'SILVER'
		},
		fifth : {
			buttonType : 'YELLOW',
			floatType : 'GIFT_RED'
		}
	},{
		first : {
			buttonType : 'SILVER'
		},
		second : {
			buttonType : 'SILVER'
		},
		third : {
			buttonType : 'SILVER'
		},
		fourth : {
			buttonType : 'SILVER'
		},
		fifth : {
			buttonType : 'YELLOW',
			floatType : 'GIFT_BLUE'
		}
	},{
		first : {
			buttonType : 'SILVER',
		},
		second : {
			buttonType : 'SILVER'
		},
		third : {
			buttonType : 'SILVER'
		},
		fourth : {
			buttonType : 'SILVER'
		},
		fifth : {
			buttonType : 'YELLOW',
			floatType : 'GIFT_QUEST'
		}
	}];

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private events : Events
	) {
		this.stages = this.stages.reverse();
	}

	goToPosition(i = 1, stage){

		this.progressShouldNotAnimate();

		if(this.activeStageObject){
			this.activeStageObject.buttonType = 'COMPLETED';
		}
		
		let position = this.getStageAndButtonPosition(i);
		let centerAndObject = this.blockComponents.toArray()[position.stage-1].getCenterAndObject(position.buttonIndex-1);
		let xy = centerAndObject.xy;

		if((this.playerPin.nativeElement as HTMLElement).classList.contains('animated')){
			this.content.scrollTo(0,this.getScrollAmountForStage(position.stage, position.buttonIndex),500);
			this.pinMovementTimeoutInterval = setTimeout(()=>{
				
				this.progressShouldAnimate();
			},1800);
		}

		this.activeStageObject = centerAndObject.object;
		
		xy.y = xy.y - ((this.playerPin.nativeElement as HTMLElement).clientHeight+22);
		xy.x = xy.x - ((this.playerPin.nativeElement as HTMLElement).clientWidth / 2);

		(this.playerPin.nativeElement as HTMLElement).style.transform = 'translate3d('+xy.x+"px"+','+xy.y+"px" +','+"0px"+')';

		setTimeout(()=>{
			(this.playerPin.nativeElement as HTMLElement).classList.add('animated');
		},100);
		if(this.activeStageObject){
			this.activeStageObject.buttonType = "ACTIVE";
		}

	}
	

	getScrollAmountForStage(stage, buttonIndex){


		let level = (4-stage)*5 + buttonIndex;
		
		let assocButton = 1;

		if(level >= 3 && level <6){
			assocButton = 3;
		}else if(level >= 6 && level < 8){
			assocButton = 6;
		}else if(level >= 8 && level < 12){
			assocButton = 8;
		}else if(level >= 12 && level < 14){
			assocButton = 12;
		}else if(level >= 14 && level < 16){
			assocButton = 14;
		}else if(level >= 16){
			assocButton = 16;
		}

		let position = this.getStageAndButtonPosition(assocButton);
		let centerAndObject = this.blockComponents.toArray()[position.stage-1].getCenterAndObject(position.buttonIndex-1);

		let valueToNegative = (this.content.getScrollElement()).clientHeight * 0.89;

		return centerAndObject.xy.y - valueToNegative;

	}




	getStageAndButtonPosition(level){
		let stageIndex = 5 - (Math.ceil(level / 5));
		let buttonIndex =  level - ((4 - stageIndex) * 5);

		return {
			stage : stageIndex,
			buttonIndex : buttonIndex
		};

	}

	ngAfterViewInit(){
		this.scrollElement = this.content.getScrollElement();
	}

	ionViewDidEnter(){
		this.progressShouldNotAnimate();
		setTimeout(()=>{
			this.content.scrollToBottom(3000);
			this.goToPosition(1,1);
			setTimeout(()=>{
				this.progressShouldAnimate();
			},3000);
		},500);
	}

	progressShouldAnimate($event = null){
		if($event && $event.target.nodeName){
			if($event.target.nodeName != "STAGE-BLOCK"){
				return;
			}
		}
		this.shouldProgressAnimate = true;
		this.timeoutInterval = setTimeout(()=>{
			this.moveToNextScreen();
		},5000);
	}

	progressShouldNotAnimate(){
		clearTimeout(this.pinMovementTimeoutInterval);
		clearTimeout(this.timeoutInterval);
		this.shouldProgressAnimate = false;
	}

	moveToNextScreen(){
		this.events.publish('arcade-game:won',{start : true});
		this.navCtrl.popToRoot({direction:'forwards'}).then(()=>{
			this.events.publish('arcade-game:won',{start : false});
		});
	}

}
