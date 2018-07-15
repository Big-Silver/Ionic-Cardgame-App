import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
	selector: 'store-offers',
	templateUrl: 'store-offers.html'
})
export class StoreOffersComponent implements AfterViewInit {


	@ViewChild('slides') slides : Slides; 

	private redSlotsData = [];
	private blueSlotsData = [];

	constructor(
		// private slide : Slides
	) {

	}	

	ngAfterViewInit(){
		this.slides.onlyExternal = true;
		setTimeout(()=>{
			this.blueSlotsData = [
				"AD",
				"SURVEY",
				"OFFERWALL",
				"OFFERWALL",
				"AD",
				"SURVEY",
				"OFFERWALL",
				"OFFERWALL"
			];
			setTimeout(()=>{
				this.redSlotsData = [
					{amount : '20,000', mode : 'sm', buttonAmount : 1.99, includeFree : true, freeAmount : 5},
					{amount : '50,000', mode : 'md', buttonAmount : 4.99, includeFree : true, freeAmount : 30},
					{amount : '100,000', mode : 'lg', buttonAmount : 9.99, includeFree : true, freeAmount : 80},
					{amount : '300,000', mode : 'xl', buttonAmount : 29.99, includeFree : true, freeAmount : 150},
					{amount : '1,000,000', mode : 'xl', buttonAmount : 99.99, includeFree : true, freeAmount : 200}
				];
			},500);
		},500);
	}
	
	changeSlideToMode(mode = "EARN"){
		if(mode != "EARN"){
			return this.slides.slideTo(1);	
		}
		this.slides.slideTo(0);
	}

	ionViewDidEnter(){
	}

}
