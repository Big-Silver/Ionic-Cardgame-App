import { Component } from '@angular/core';


@Component({
	selector: 'new-home-referral-code',
	templateUrl: 'new-home-referral-code.html'
})
export class NewHomeReferralCodeComponent {

	private randomNumber : any= '';

	constructor() {
	}

	generateRandomNumber(){
		this.randomNumber = Math.floor(Math.random()*90000) + 10000;
	} 

}
