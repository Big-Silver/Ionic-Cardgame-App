import { Component, ElementRef, AfterViewInit, ViewChild, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'stage-block',
	templateUrl: 'stage-block.html'
})
export class StageBlockComponent implements AfterViewInit {

	// GREEN, YELLOW, RED, SILVER
	// GIFT_RED, GIFT_QUEST, GIFT_BLUE, GIFT_YELLOw, AVATAR

	private buttons = [{},{},{},{},{}];
	private buttonsToRender = [];
	private nativeButtons  : Array<HTMLElement>= [];

	@Output() goToIndex : EventEmitter<any> = new EventEmitter();

	@Input() set data(value){
		if(value.first){
			this.buttons[0] = value.first;
			this.buttonsToRender[4] = value.first;
		}
			
		if(value.second){
			this.buttons[1] = value.second;
			this.buttonsToRender[3] = value.second;
		}
			
		if(value.third){
			this.buttons[2] = value.third;
			this.buttonsToRender[2] = value.third;
		}
			
		if(value.fourth){
			this.buttons[3] = value.fourth;
			this.buttonsToRender[1] = value.fourth;
		}
			
		if(value.fifth){
			this.buttons[4] = value.fifth;
			this.buttonsToRender[0] = value.fifth;
		}

	}
	@Input() stageIndex = [];

	@ViewChildren('buttons') buttonList : QueryList<ElementRef>;

	private parentNativeElement : HTMLElement;

	constructor(
		private el: ElementRef
	) {
	}

	ngAfterViewInit(){
		this.parentNativeElement = this.el.nativeElement as HTMLElement;
		this.buttonList.toArray().forEach((button : ElementRef)=>{
			this.nativeButtons.push(button.nativeElement as HTMLElement);
		});
	}

	getCenterAndObject(index){
		let parentOffsetTop = this.parentNativeElement.offsetTop;
		let button = this.nativeButtons[this.nativeButtons.length - index - 1];

		return {
			xy : {
				x : button.offsetLeft + (button.clientWidth/2),
				y : parentOffsetTop + button.offsetTop + (button.clientHeight/2)
			},
			object : this.buttons[index]
		};

	}

	private goToLevel(index, $event : PointerEvent){
		$event.cancelBubble = true;
		$event.preventDefault();
		this.goToIndex.emit(index);
	}

}
