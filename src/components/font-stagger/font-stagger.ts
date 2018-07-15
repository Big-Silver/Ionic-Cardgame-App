import { Component, Input } from '@angular/core';

@Component({
  selector: 'font-stagger, [font-stagger]',
  templateUrl: 'font-stagger.html'
})
export class FontStaggerComponent {

	private arrayOfText : Array<any> = new Array<any>();

	@Input()
	set text(value){
		this.arrayOfText = [];
		for(var i=0;i<value.length;i++){
			this.arrayOfText.push(value.charAt(i));
		}
	}
	

	constructor() {
	
	}

}
