import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'home-screen-game-mode-header',
	templateUrl: 'home-screen-game-mode-header.html'
})
export class HomeScreenGameModeHeaderComponent {

	@ViewChild('image') image : ElementRef;

	private _title : string = '';
	private _subTitle : string = '';
	private _icon : string = '';
	private _primaryColor : string = '';
	private _secondaryColor : string = '';

	@Input() set title(value){
		this._title = value;
	}

	@Input() set subTitle(value){
		this._subTitle = value;
	}

	@Input() set icon(value){
		this._icon = value;
	}

	@Input() set primaryColor(value){
		this._primaryColor = value;
	}

	@Input() set secondaryColor(value){
		this._secondaryColor = value;
	}

	constructor() {
		
	}

	resizeImageToProperSize(){
		let image = this.image.nativeElement as HTMLImageElement;
		image.style.width = (( image.clientHeight * image.naturalWidth ) / image.naturalHeight) + 'px';
	}

}
