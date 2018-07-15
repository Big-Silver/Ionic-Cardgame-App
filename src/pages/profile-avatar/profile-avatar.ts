import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, MenuController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { gameHomePage } from '../game-home/game-home';

@Component({
	selector: 'page-profile-avatar',
	templateUrl: 'profile-avatar.html',
})
export class ProfileAvatarPage {

	@ViewChild(Slides) chooseFromLib: Slides;
	captureDataUrl: any;
	assetBaseUrl: any;
	activeAvatar: number;
	isAvatarFromLib: boolean;
	isImageFromCam: boolean;
	Isformactive: boolean;
	Iscamcapt: boolean;
	public avatarStore: any;
	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, private camera: Camera) {
		this.captureDataUrl = "assets/images/profile/camera.png";
		this.assetBaseUrl = "assets/images/profile";
		this.isAvatarFromLib = false;
		this.isImageFromCam = false;
		this.activeAvatar = 0;
		this.Isformactive = false;
		this.Iscamcapt = false;
		this.avatarStore = [
			{ 'index': 0, 'status': 0, 'image': (this.assetBaseUrl + '/avatar1.svg') },
			{ 'index': 1, 'status': 0, 'image': (this.assetBaseUrl + '/avatar2.svg') },
			{ 'index': 2, 'status': 0, 'image': (this.assetBaseUrl + '/avatar3.svg') },
			{ 'index': 3, 'status': 0, 'image': (this.assetBaseUrl + '/avatar4.svg') },
			{ 'index': 4, 'status': 0, 'image': (this.assetBaseUrl + '/avatar5.svg') },
			{ 'index': 5, 'status': 0, 'image': (this.assetBaseUrl + '/avatar6.svg') },
			{ 'index': 6, 'status': 0, 'image': (this.assetBaseUrl + '/avatar7.svg') },
			{ 'index': 7, 'status': 0, 'image': (this.assetBaseUrl + '/avatar8.svg') },
			{ 'index': 8, 'status': 0, 'image': (this.assetBaseUrl + '/avatar9.svg') },
			{ 'index': 9, 'status': 0, 'image': (this.assetBaseUrl + '/avatar10.svg') },
			{ 'index': 10, 'status': 0, 'image': (this.assetBaseUrl + '/avatar11.svg') },
			{ 'index': 11, 'status': 0, 'image': (this.assetBaseUrl + '/avatar12.svg') },
			{ 'index': 12, 'status': 0, 'image': (this.assetBaseUrl + '/avatar13.svg') },
			{ 'index': 13, 'status': 0, 'image': (this.assetBaseUrl + '/avatar14.svg') },
			{ 'index': 14, 'status': 0, 'image': (this.assetBaseUrl + '/avatar15.svg') },
			{ 'index': 15, 'status': 0, 'image': (this.assetBaseUrl + '/avatar16.svg') },
			{ 'index': 16, 'status': 0, 'image': (this.assetBaseUrl + '/avatar17.svg') },
			{ 'index': 17, 'status': 0, 'image': (this.assetBaseUrl + '/avatar18.svg') },
			{ 'index': 18, 'status': 0, 'image': (this.assetBaseUrl + '/avatar19.svg') },
			{ 'index': 19, 'status': 0, 'image': (this.assetBaseUrl + '/avatar20.svg') },
			{ 'index': 20, 'status': 0, 'image': (this.assetBaseUrl + '/avatar21.svg') },
			{ 'index': 21, 'status': 0, 'image': (this.assetBaseUrl + '/avatar22.svg') },
			{ 'index': 22, 'status': 0, 'image': (this.assetBaseUrl + '/avatar23.svg') },
			{ 'index': 23, 'status': 0, 'image': (this.assetBaseUrl + '/avatar24.svg') },
			{ 'index': 24, 'status': 0, 'image': (this.assetBaseUrl + '/avatar25.svg') },
			{ 'index': 25, 'status': 0, 'image': (this.assetBaseUrl + '/avatar26.svg') },
			{ 'index': 26, 'status': 0, 'image': (this.assetBaseUrl + '/avatar27.svg') },
			{ 'index': 27, 'status': 0, 'image': (this.assetBaseUrl + '/avatar28.svg') },
			{ 'index': 28, 'status': 0, 'image': (this.assetBaseUrl + '/avatar29.svg') },
			{ 'index': 29, 'status': 0, 'image': (this.assetBaseUrl + '/avatar30.svg') },
			{ 'index': 30, 'status': 0, 'image': (this.assetBaseUrl + '/avatar31.svg') },
			{ 'index': 31, 'status': 0, 'image': (this.assetBaseUrl + '/avatar32.svg') },
			{ 'index': 32, 'status': 0, 'image': (this.assetBaseUrl + '/avatar33.svg') },
			{ 'index': 33, 'status': 0, 'image': (this.assetBaseUrl + '/avatar34.svg') },
			{ 'index': 34, 'status': 0, 'image': (this.assetBaseUrl + '/avatar35.svg') },
			{ 'index': 35, 'status': 0, 'image': (this.assetBaseUrl + '/avatar36.svg') },
			{ 'index': 36, 'status': 0, 'image': (this.assetBaseUrl + '/avatar37.svg') },
			{ 'index': 37, 'status': 0, 'image': (this.assetBaseUrl + '/avatar38.svg') },
			{ 'index': 38, 'status': 0, 'image': (this.assetBaseUrl + '/avatar39.svg') },
			{ 'index': 39, 'status': 0, 'image': (this.assetBaseUrl + '/avatar40.svg') },
			{ 'index': 40, 'status': 0, 'image': (this.assetBaseUrl + '/avatar41.svg') },
			{ 'index': 41, 'status': 0, 'image': (this.assetBaseUrl + '/avatar42.svg') },
			{ 'index': 42, 'status': 0, 'image': (this.assetBaseUrl + '/avatar43.svg') },
			{ 'index': 43, 'status': 0, 'image': (this.assetBaseUrl + '/avatar44.svg') },
			{ 'index': 44, 'status': 0, 'image': (this.assetBaseUrl + '/avatar45.svg') },
			{ 'index': 45, 'status': 0, 'image': (this.assetBaseUrl + '/avatar46.svg') }
		];
	}

	ionViewDidLoad() {
		this.menu.swipeEnable(false);
		this.chooseFromLib.initialSlide = 2;

	}

	capture() {
		//~ this.makeButtonActive(0);
		//this.showSliderAvatar(0,0);
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true

		}

		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.captureDataUrl = base64Image;
			this.isImageFromCam = true;
			this.isAvatarFromLib = false;
			this.makesubmittbuttonactive();

		}, (err) => {
			// Handle error
		});
	}
	choosecapture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
			correctOrientation: true

		}

		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.captureDataUrl = base64Image;
			this.isImageFromCam = true;
			this.isAvatarFromLib = false;
			this.makesubmittbuttonactive();

		}, (err) => {
			// Handle error
		});
	}
	resetAllActive() {
		for (var index in this.avatarStore) {
			let ind = parseInt(index);
			let stack = this.avatarStore[ind];
			if (ind == this.activeAvatar) {
				stack.status = 1;
			} else {
				stack.status = 0;
			}
		}
	}

	selectFromLibs(el) {
		//this.showSliderAvatar(1, el);
		this.isAvatarFromLib = true;
		this.Iscamcapt = false;
		this.captureDataUrl = "assets/images/profile/camera.png";
		this.isImageFromCam = false;
	}

	makesubmittbuttonactive() {

		this.Isformactive = true;
	}

	avatarSelected(index) {
		this.chooseFromLib.slideTo(index, 500, false);
		this.activeAvatar = index;
		//this.resetAllActive();
		this.makesubmittbuttonactive();

	}

	doRegister() {
		this.navCtrl.setRoot(gameHomePage);
	}

	presentActionSheet() {
		let actionSheet = this.actionSheetCtrl.create({
			buttons: [
				{
					text: 'Choose From Gallary',
					handler: () => {
						this.choosecapture();
					}
				},
				{
					text: 'Take Picture',
					handler: () => {
						this.capture();
					}
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
					}
				}
			]
		});
		actionSheet.present();
	}


}
