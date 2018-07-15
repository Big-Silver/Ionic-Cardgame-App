import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'shining-text, [shining-text]',
	templateUrl: 'shining-text.html'
})
export class ShiningTextComponent implements AfterViewInit {

	private inputArray : Array<any> = new Array<any>();
	private _textProperty : any = {};
	private htmlElement : HTMLElement;

	@Input() set text(value : string){

		this.inputArray = [];
		for(let i=0; i<value.length; i++){
			this.inputArray.push(value.charAt(i));
		}
	}

	@Input() set textProperty(value : any){
		this._textProperty = value;
		this.setTextProperty();
	}

	constructor(
		private el : ElementRef
	) {
		this.htmlElement = this.el.nativeElement as HTMLElement;
	}

	setTextProperty(){
		if(this.htmlElement && this._textProperty){
			let property = this._textProperty;
			this.htmlElement.style.fontSize = ( property.fontSize ) ? property.fontSize : 'normal';
		}
	}

	ngAfterViewInit(){
		this.setTextProperty();
	}




}
