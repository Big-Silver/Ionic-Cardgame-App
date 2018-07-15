import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-default-avatar-list',
	templateUrl: 'default-avatar-list.html',
})
export class DefaultAvatarListPage implements AfterViewInit {


	@ViewChild('imageSlider') imageSlider : Slides;

	private images = [
		'assets/images/profile/avatar1.svg',
		'assets/images/profile/avatar2.svg',
		'assets/images/profile/avatar3.svg',
		'assets/images/profile/avatar4.svg',
		'assets/images/profile/avatar5.svg',
		'assets/images/profile/avatar6.svg',
		'assets/images/profile/avatar7.svg',
		'assets/images/profile/avatar8.svg',
		'assets/images/profile/avatar9.svg',
		'assets/images/profile/avatar10.svg',
		'assets/images/profile/avatar11.svg',
		'assets/images/profile/avatar12.svg',
		'assets/images/profile/avatar13.svg',
		'assets/images/profile/avatar14.svg',
		'assets/images/profile/avatar15.svg',
		'assets/images/profile/avatar16.svg',
		'assets/images/profile/avatar17.svg',
		'assets/images/profile/avatar18.svg',
		'assets/images/profile/avatar19.svg',
		'assets/images/profile/avatar20.svg',
		'assets/images/profile/avatar21.svg',
		'assets/images/profile/avatar22.svg',
		'assets/images/profile/avatar23.svg',
		'assets/images/profile/avatar24.svg',
		'assets/images/profile/avatar25.svg',
		'assets/images/profile/avatar26.svg',
		'assets/images/profile/avatar27.svg',
		'assets/images/profile/avatar28.svg',
		'assets/images/profile/avatar29.svg',
		'assets/images/profile/avatar30.svg',
		'assets/images/profile/avatar31.svg',
		'assets/images/profile/avatar32.svg',
		'assets/images/profile/avatar33.svg',
		'assets/images/profile/avatar34.svg',
		'assets/images/profile/avatar35.svg',
		'assets/images/profile/avatar36.svg',
		'assets/images/profile/avatar37.svg',
		'assets/images/profile/avatar38.svg',
		'assets/images/profile/avatar39.svg',
		'assets/images/profile/avatar40.svg',
		'assets/images/profile/avatar41.svg',
		'assets/images/profile/avatar42.svg',
		'assets/images/profile/avatar43.svg',
		'assets/images/profile/avatar44.svg',
		'assets/images/profile/avatar45.svg',
		'assets/images/profile/avatar46.svg'
	];

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController
	) {
	}

	ngAfterViewInit(){
		let slider : any = this.imageSlider;
		
		this.imageSlider.slidesPerView = 3;
		this.imageSlider.effect = 'coverflow';
		
		this.imageSlider.centeredSlides = true;
		this.imageSlider.loop = true;
		this.imageSlider.spaceBetween = '-60';

		slider.coverflow.slideShadows = false;
		slider.coverflow.rotate = 0;
		slider.coverflow.depth = 310;
		slider.coverflow.doNotZoomOther = true;

		this.imageSlider.update();
	}

	private goToBack(){

		if(this.navParams && this.navParams.data && this.navParams.data.setAvatarImage){
			this.navParams.data.setAvatarImage(this.images[this.imageSlider.getActiveIndex() - 3]);
		}

		this.view.dismiss();
	}	

	private goBackWithoutImage(){
		if(this.navParams && this.navParams.data && this.navParams.data.setAvatarImage){
			this.navParams.data.setAvatarImage('');
		}

		this.view.dismiss();
	}

}
