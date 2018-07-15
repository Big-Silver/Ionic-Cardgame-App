import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[inbox-header]',
  templateUrl: 'inbox-header.html'
})
export class InboxHeaderComponent {

	@Output() goBack : EventEmitter<any> = new EventEmitter();
	
	constructor() {
	}

}
