import { Component, ComponentRef, ElementRef, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ModalCmp } from 'ionic-angular';
import { StoreOffersComponent } from '../../components/store-offers/store-offers';
import { StatusBar } from '@ionic-native/status-bar';
import { ConvertPage } from '../convert/convert';

@Component({
	selector: 'page-store',
	templateUrl: 'store.html',
})
export class StorePage {

	private nativeElement : HTMLElement;
	private parentNativeElement  : HTMLElement;

	@ViewChild(StoreOffersComponent) storeOfferComponent : StoreOffersComponent;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private ele : ElementRef,
		private view : ViewController,
		private modal : ModalController,
		private statusBar : StatusBar,
		private zone : NgZone,
		private changeDetectionRef : ChangeDetectorRef
	) {
		this.changeDetectionRef.detach();
		this.nativeElement = this.ele.nativeElement as HTMLElement;
		if(this.navParams.data && this.navParams.data.parentNativeElement){
			this.parentNativeElement = this.navParams.data.parentNativeElement;
		}

	}

	ionViewWillEnter(){
		this.changeDetectionRef.reattach();
	}

	ionViewDidEnter(){
		if(this.parentNativeElement){
			this.parentNativeElement.style.display = 'none';
		}
	}

	ionViewDidLoad() {
	}

	closeModal(){
		this.zone.runOutsideAngular(()=>{
			if(this.parentNativeElement){
				this.parentNativeElement.style.display = '';
			}
			this.view.dismiss();
		});
	}

	convertCoins(){
		let modal = this.modal.create(ConvertPage);
		modal.present();
	}

	modeChanged(e){
		this.nativeElement.classList.remove('earnMode','buyMode');

		if(this.storeOfferComponent){
			this.storeOfferComponent.changeSlideToMode(e);
		}

		if(e  == "EARN"){
			this.nativeElement.classList.add('earnMode');
		}else if(e == "BUY"){
			this.nativeElement.classList.add('buyMode');
		}
	}

}
