import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { ArcadeContentFlagDetailsComponent } from '../arcade-content-flag-details/arcade-content-flag-details';

@Component({
	selector: 'arcade-setting',
	templateUrl: 'arcade-setting.html'
})
export class ArcadeSettingComponent {

	text: string;
	public avatarStore: any;
	public imageName: any;
	public selectedFlag: string;
	public assetBaseUrl = "assets/images/flag/PNG(retina)";
	constructor(public popoverCtrl: PopoverController) {
		this.text = 'Hello World';
		this.imageName = 'assets/images/dashboard/coin.png';
		this.selectedFlag = "united_kingdom_circle_96x96.png";
	}

	presentPopover(ev) {
		let popover = this.popoverCtrl.create(ArcadeContentFlagDetailsComponent, {
		});
		popover.present({
			ev: ev
		});
		popover.onDidDismiss((popoverData) => {
			if (popoverData == null) {
				this.selectedFlag = this.selectedFlag;
			} else {
				this.selectedFlag = popoverData + '.png';
			}

		})
	}

}
