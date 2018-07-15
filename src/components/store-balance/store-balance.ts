import { Component, Input } from '@angular/core';


@Component({
	selector: 'store-balance',
	templateUrl: 'store-balance.html'
})
export class StoreBalanceComponent {

	@Input() balance1 : number = 10;
	@Input() balance2 : number = 12;
	@Input() balance3 : number = 15;
  
	private tokenRed = './assets/images/arcade/token-red.png';
	private tokenBlue = './assets/images/arcade/token-blue.png';
	private tokenYellow = './assets/images/store/helper.png';
  
	constructor() {
	}
}
