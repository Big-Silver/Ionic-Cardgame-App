import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';


@Component({
	selector: 'new-home-avatar-options',
	templateUrl: 'new-home-avatar-options.html'
})
export class NewHomeAvatarOptionsComponent {


	@Output() openDefaultAvatarListPage: EventEmitter<any> = new EventEmitter<any>();

	@Output() avatarSelected: EventEmitter<any> = new EventEmitter<any>();

	private defaultUrlCustomImage = 'assets/images/signup/unknown-profile.png'
	private defaultUrlDefaultImage = 'assets/images/signup/unknown-default.png';

	@ViewChild('customImage') customImage: ElementRef;
	@ViewChild('defaultImage') defaultImage: ElementRef;

	constructor(
		private camera: Camera,
		private actionSheetCtrl: ActionSheetController
	) {
	}

	setDefaultImage(imageUrl) {

		if (!imageUrl) imageUrl = this.defaultUrlDefaultImage;
		if (!this.customImage || !this.defaultImage) return;

		let elementToChangeImage = this.defaultImage.nativeElement as HTMLImageElement;
		let elementToChangeToDefault = this.customImage.nativeElement as HTMLElement;

		elementToChangeImage.src = imageUrl;
		elementToChangeToDefault.style.backgroundImage =  "url('"+this.defaultUrlCustomImage+"')";

		if (imageUrl != this.defaultUrlDefaultImage) {
			this.avatarSelected.emit();
		}

	}

	setCustomImage(imageUrl) {

		if (!imageUrl) imageUrl = this.defaultUrlCustomImage;
		if (!this.customImage || !this.defaultImage) return;

		let elementToChangeImage = this.customImage.nativeElement as HTMLElement;
		let elementToChangeToDefault = this.defaultImage.nativeElement as HTMLImageElement;

		elementToChangeImage.style.backgroundImage = "url('"+imageUrl+"')";
		elementToChangeToDefault.src = this.defaultUrlDefaultImage;

		if (imageUrl != this.defaultUrlCustomImage) {
			this.avatarSelected.emit();
		}

	}

	getImage(type : any = '') {

		if (type == 'camera') {
			type = this.camera.PictureSourceType.CAMERA;
		} else {
			type = this.camera.PictureSourceType.PHOTOLIBRARY;
		}


		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			sourceType: type,
			correctOrientation : true
		};

		this.camera.getPicture(options).then((imageUri) => {
			let base64Image = 'data:image/jpeg;base64,' + imageUri;
			this.setCustomImage(base64Image);
		}, (err) => {
		})
	}

	selectImage() {


		let actionSheet = this.actionSheetCtrl.create({
			title: 'Select Source',
			buttons: [
				{
					text: 'Camera',
					role: 'destructive',
					handler: () => {
						this.getImage('camera');
					}
				}, {
					text: 'Gallary',
					role: 'destructive',
					handler: () => {
						this.getImage();
					}
				}, {
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