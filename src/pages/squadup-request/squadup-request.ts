import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'page-squadup-request',
	templateUrl: 'squadup-request.html',
})
export class SquadupRequestPage {

	private mode = 'SQUADUP';
	private isPageLoaded = false;

	constructor(
		public view: ViewController,
		public navParams: NavParams,
		private soundProvider : clickSoundProvider
	) {
	}

	ionViewDidLoad() {
	}

	goBack(){
		this.view.dismiss();
	}

	ionViewDidEnter(){
		this.soundProvider.playWarSnareSound();
		setTimeout(()=>{
			this.isPageLoaded = true;
		},300);
	}

}
