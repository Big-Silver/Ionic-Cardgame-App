import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'arcade-cash-balance',
	templateUrl: 'arcade-cash-balance.html'
})
export class ArcadeCashBalanceComponent {

	@Output() openVerificationPage  : EventEmitter<any> = new EventEmitter();
	@Output() openCashoutPage  : EventEmitter<any> = new EventEmitter();

	@Input() isVerified = false;

	constructor() {
	}

	cashout(){
		if(this.isVerified){
			this.openCashoutPage.emit();
		}else{
			this.openVerificationPage.emit();
		}
	}

}
