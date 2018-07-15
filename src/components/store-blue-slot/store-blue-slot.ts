import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';


@Component({
	selector: 'store-blue-slot',
	templateUrl: 'store-blue-slot.html'
})
export class StoreBlueSlotComponent implements AfterViewInit {

	private _mode = '';

	@Input() set mode(value){
		this._mode = value;
		this.setMode();
	}

	constructor(
		private ele : ElementRef
	) {
		
	}

	ngAfterViewInit(){
		this.setMode();
	}

	setMode(){

		if(!this.ele)
			return;

		let className = (this._mode == 'AD')
			? 'ad-mode' : (this._mode == "SURVEY") 
				? 'survey-mode' : (this._mode == "OFFERWALL")
					? 'offerwall-mode' : ""; 

		let nativeElement = this.ele.nativeElement as HTMLElement;
		nativeElement.classList.remove('ad-mode', 'survey-mode', 'offerwall-mode');
		
		nativeElement.classList.add(className);

	}

}
