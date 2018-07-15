import { Component , ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewHomeLoginPage } from '../new-home-login/new-home-login';
import { NewHomeSignupPage } from '../new-home-signup/new-home-signup';
import { ImageCacher } from '../../experiment/imageCacher';


@Component({
	selector: 'page-new-home',
	templateUrl: 'new-home.html',
})
@ImageCacher([
	'NewHomeSignupPage',
	'NewHomeLoginPage'
])
export class NewHomePage implements AfterViewInit {

	@ViewChild('video') video : ElementRef;
	private showVideo = true;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewWillEnter(){
		this.showVideo = true;
	}

	ionViewDidLoad() {
		this.showVideo = true;
	}

	ionViewDidLeave(){
		this.showVideo = false;
	}

	goToLoginScreen(){
		this.navCtrl.push(NewHomeLoginPage);
	}

	goToSignupScreen(){
		this.navCtrl.push(NewHomeSignupPage);
	}

	ngAfterViewInit(){
		setTimeout(()=>{
			(this.video.nativeElement as HTMLVideoElement).play();
			(this.video.nativeElement as HTMLVideoElement).muted = false;
		},1000);
	}

	ionViewDidEnter(){
		if(this.video){
			(this.video.nativeElement as HTMLVideoElement).play();
			(this.video.nativeElement as HTMLVideoElement).muted = false;
		}
	}

	ionViewWillLeave(){
		if(this.video){
			(this.video.nativeElement as HTMLVideoElement).pause();
			(this.video.nativeElement as HTMLVideoElement).muted = true;
		}
	}

}
