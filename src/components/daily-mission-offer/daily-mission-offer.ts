import { Component, Input, HostListener } from '@angular/core';


@Component({
	selector: 'daily-mission-offer',
	templateUrl: 'daily-mission-offer.html'
})
export class DailyMissionOfferComponent {

	@Input() data : any = {};

	constructor() {
	}

	@HostListener('click') changeOfferStatus(){
		if(this.data.offerStatus == "APPLY"){
			this.data.offerStatus = "ONGOING";
		}else if(this.data.offerStatus == "ONGOING"){
			this.data.offerStatus = "COMPLETED";
		}
	}

}
