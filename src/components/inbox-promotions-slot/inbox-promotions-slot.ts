import { Component, Input } from '@angular/core';

@Component({
	selector: 'inbox-promotions-slot',
	templateUrl: 'inbox-promotions-slot.html'
})
export class InboxPromotionsSlotComponent {

	private _data : any = {};

	@Input() set data(value){
		if(value){
			this._data = value;
			if(this._data && this._data.background){
				if((this._data.background as string).indexOf('url') == -1){
					this._data.background = "url('"+this._data.background+"')";
				}
			}
		}
	};

	constructor() {
	}

}
