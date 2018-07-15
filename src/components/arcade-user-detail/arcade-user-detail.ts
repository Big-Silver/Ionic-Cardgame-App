import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';


@Component({
	selector: 'arcade-user-detail',
	templateUrl: 'arcade-user-detail.html'
})
export class ArcadeUserDetailComponent {
	private text: string;
	public captureDataUrl: any;

	private isMale = true;
	@Input() isVerified = false;

	@Output() openVerificationPage: EventEmitter<any> = new EventEmitter();

	@ViewChild('username') userName;
	@ViewChild('input') myInput;
	constructor(private camera: Camera, private actionSheetCtrl: ActionSheetController) {
		this.captureDataUrl = "assets/images/profile/avatar1.svg";
	}
	chooseImage() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
			correctOrientation: true
		}
		this.camera.getPicture(options).then((imageData) => {
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.captureDataUrl = base64Image;
		}, (err) => {

		});
	}
	capture() {
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

		}, (err) => {
			// Handle error
		});
	}
	presentActionSheet() {
		let actionSheet = this.actionSheetCtrl.create({
			buttons: [
				{
					text: 'Choose From Gallary',
					handler: () => {
						this.chooseImage();
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


	goToVerificationPage() {
		this.openVerificationPage.emit();
	}

}
