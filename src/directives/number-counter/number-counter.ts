import { Directive, ElementRef, Input } from '@angular/core';
import { clickSoundProvider } from '../../providers/click';
import $ from 'jquery'

@Directive({
	selector: '[number-counter]'
})
export class NumberCounterDirective {

	private currentCounter = 0;
	private htmlElement: HTMLElement;

	@Input() set counts(value) {

		if (!value) {
			this.setValue(0);
			return;
		}
		this.setValue(value);
	}

	constructor(
		private el: ElementRef,
		private soundProvider : clickSoundProvider
	) {
		this.htmlElement = el.nativeElement as HTMLElement;
	}

	setValue(value) {
		if (value == 0) {
			this.currentCounter = 0;
			return this.htmlElement.innerHTML = '0';
		}
		if(this.currentCounter == 0){
			this.currentCounter = value;
			return this.htmlElement.innerHTML = value;
		}
		this.doCounter(this.currentCounter, value);
	}

	doCounter(oldNum, newNum){

		let numcolor = '';
		let time = 400;

		this.htmlElement.classList.remove('positive-pulse');
		this.htmlElement.classList.remove('negative-pulse');

		time = Math.abs(newNum-oldNum)*time;
        
        $({
            countNum: oldNum
        }).animate({
            countNum: newNum
        }, {
            duration: time,
            step: (countNum) => {
                $(this.htmlElement).text(Math.floor(countNum));
            },
            complete: () => {
				this.currentCounter = newNum;
				let classToAdd = (oldNum - newNum < 0) ? 'positive-pulse' : 'negative-pulse';
				if(classToAdd == 'positive-pulse'){
					this.soundProvider.playArcadeAwardedSound();
				}
				this.htmlElement.classList.add(classToAdd);
				setTimeout(()=>{
					this.htmlElement.classList.remove(classToAdd);
				},1200);
            }
        });
        
            
    };

}
