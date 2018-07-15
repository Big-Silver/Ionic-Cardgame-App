import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'custom-input',
	templateUrl: 'custom-input.html'
})
export class CustomInputComponent {

	@Input() type : string = "";
	@Input() label : string =  "";
	@Input() placeHolder : string = '';
	@Input() model : any = null; 

	@Output() focus : EventEmitter<any> = new EventEmitter();
	@Output() blur : EventEmitter<any> = new EventEmitter();
	@Output() keyup : EventEmitter<any> = new EventEmitter();

	private isValid = true;


	constructor() {
	}

}
